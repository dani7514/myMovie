import { Test, TestingModule } from '@nestjs/testing';
import { PopularController } from './popular.controller';

describe('PopularController', () => {
  let controller: PopularController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopularController],
    }).compile();

    controller = module.get<PopularController>(PopularController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
