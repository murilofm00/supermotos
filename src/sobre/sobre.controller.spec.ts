import { Test, TestingModule } from '@nestjs/testing';
import { SobreController } from './sobre.controller';
import { SobreService } from './sobre.service';

describe('SobreController', () => {
  let controller: SobreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SobreController],
      providers: [SobreService],
    }).compile();

    controller = module.get<SobreController>(SobreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
