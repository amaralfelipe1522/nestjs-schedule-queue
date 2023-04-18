import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tweet } from './entities/tweet.entity';
import { TweetsCountTaskService } from './tweets-count-task/tweets-count-task.service';

@Module({
  imports: [SequelizeModule.forFeature([Tweet])],
  controllers: [TweetsController],
  providers: [TweetsService, TweetsCountTaskService],
})
export class TweetsModule {}
