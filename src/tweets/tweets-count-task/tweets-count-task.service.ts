import { Inject, Injectable } from '@nestjs/common';
import { Tweet } from '../entities/tweet.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class TweetsCountTaskService {
  private limit = 10;
  private ttl = 1 * 60 * 10;
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    @InjectQueue('emails')
    private emailsQueue: Queue,
  ) {}

  //@Interval(5000)
  @Cron(CronExpression.EVERY_10_SECONDS)
  async countTweets() {
    console.log('Buscando Tweets em background...');
    //captura o valor de off-set atual se existir
    let offset = await this.cacheManager.get<number>('tweet-offset');
    offset = offset === undefined ? 0 : offset;

    const tweets = await this.tweetModel.findAll({
      offset: offset,
      limit: this.limit,
    });

    // se encontra 10 tweets armazena em cache a nova posição do offset
    if (tweets.length == this.limit) {
      this.cacheManager.set('tweet-offset', offset + this.limit, this.ttl);
      console.log(`Buscou mais ${this.limit} tweets`);

      // envia para a fila de emails um novo job
      this.emailsQueue.add({ tweets: tweets.map((tweet) => tweet.toJSON()) });
    }
  }
}
