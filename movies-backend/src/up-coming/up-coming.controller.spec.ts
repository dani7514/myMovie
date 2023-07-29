import { Test, TestingModule } from '@nestjs/testing';
import { UpComingController } from './up-coming.controller';

describe('UpComingController', () => {
  let controller: UpComingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpComingController],
    }).compile();

    controller = module.get<UpComingController>(UpComingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
