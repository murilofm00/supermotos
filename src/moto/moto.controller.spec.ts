import { Test, TestingModule } from '@nestjs/testing';
import { MotoController } from './moto.controller';
import { MotoService } from './moto.service';

describe('MotoController', () => {
  let controller: MotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotoController],
      providers: [MotoService],
    }).compile();

    controller = module.get<MotoController>(MotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
