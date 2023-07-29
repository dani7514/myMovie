import { Test, TestingModule } from '@nestjs/testing';
import { UpComingService } from './up-coming.service';

describe('UpComingService', () => {
  let service: UpComingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpComingService],
    }).compile();

    service = module.get<UpComingService>(UpComingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
