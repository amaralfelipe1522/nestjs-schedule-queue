import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('emails')
export class SendMailWithTweets {
  @Process()
  handle(job: Job) {
    console.log(JSON.stringify(job.data));
  }
}
