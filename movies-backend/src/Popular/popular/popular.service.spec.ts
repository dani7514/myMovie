import { Test, TestingModule } from '@nestjs/testing';
import { PopularService } from './popular.service';

describe('PopularService', () => {
  let service: PopularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopularService],
    }).compile();

    service = module.get<PopularService>(PopularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
