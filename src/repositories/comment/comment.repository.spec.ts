import { Test, TestingModule } from '@nestjs/testing';
import { CommentRepository } from './comment.repository';
import { PrismaService } from '@database/prisma.service';

describe('CommentRepository', () => {
  let repository: CommentRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentRepository, PrismaService],
    }).compile();

    repository = module.get<CommentRepository>(CommentRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
