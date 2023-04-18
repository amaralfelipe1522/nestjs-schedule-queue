import { Injectable } from '@nestjs/common';
import { Tweet } from '../entities/tweet.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TweetsCountTaskService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
  ) {}

  //@Interval(5000)
  @Cron(CronExpression.EVERY_10_SECONDS)
  async countTweets() {
    console.log('Tarefa em background');
    const tweets = await this.tweetModel.findAll({ offset: 0, limit: 10 });
  }
}
