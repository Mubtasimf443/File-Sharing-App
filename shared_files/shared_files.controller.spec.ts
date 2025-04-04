import { Test, TestingModule } from '@nestjs/testing';
import { SharedFilesController } from './shared_files.controller';

describe('SharedFilesController', () => {
  let controller: SharedFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharedFilesController],
    }).compile();

    controller = module.get<SharedFilesController>(SharedFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
