import { Test, TestingModule } from '@nestjs/testing';
import { TweetsCountTaskService } from './tweets-count-task.service';

describe('TweetsCountTaskService', () => {
  let service: TweetsCountTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsCountTaskService],
    }).compile();

    service = module.get<TweetsCountTaskService>(TweetsCountTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
