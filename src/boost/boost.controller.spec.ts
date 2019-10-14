import { Test, TestingModule } from '@nestjs/testing';
import { BoostController } from './boost.controller';

describe('Boost Controller', () => {
  let controller: BoostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoostController],
    }).compile();

    controller = module.get<BoostController>(BoostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
