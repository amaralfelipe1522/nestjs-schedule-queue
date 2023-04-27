import { Module } from '@nestjs/common';
import { SendMailWithTweets } from './send-mail-with-tweets.job';

@Module({ providers: [SendMailWithTweets] })
export class MailingModule {}
