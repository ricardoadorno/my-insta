import { Test, TestingModule } from '@nestjs/testing';
import { PostRepository } from './post.repository';
import { PrismaService } from '@database/prisma.service';

describe('PostRepository', () => {
  let repository: PostRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostRepository, PrismaService],
    }).compile();

    repository = module.get<PostRepository>(PostRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
