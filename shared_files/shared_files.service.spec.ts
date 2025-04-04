import { Test, TestingModule } from '@nestjs/testing';
import { SharedFilesService } from './shared_files.service';

describe('SharedFilesService', () => {
  let service: SharedFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedFilesService],
    }).compile();

    service = module.get<SharedFilesService>(SharedFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
