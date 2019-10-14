import { Test, TestingModule } from '@nestjs/testing';
import { BoostService } from './boost.service';

describe('BoostService', () => {
  let service: BoostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoostService],
    }).compile();

    service = module.get<BoostService>(BoostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
