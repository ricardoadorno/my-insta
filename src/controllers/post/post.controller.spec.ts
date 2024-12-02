import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from '@services/post/post.service';
import { CreatePostDto } from '@dtos/post.dto';
import { PostRepository } from '@repositories/post/post.repository';
import { PrismaService } from '@database/prisma.service';

describe('PostController', () => {
  let controller: PostController;
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [
        {
          provide: PostService,
          useValue: {
            findMany: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
          },
        },
        PostRepository,
        PrismaService,
      ],
    }).compile();

    controller = module.get<PostController>(PostController);
    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findMany', () => {
    it('should call postService.findMany with correct parameters', async () => {
      const authorId = '1';
      await controller.findMany(authorId);
      expect(service.findMany).toHaveBeenCalledWith({ authorId });
    });
  });

  describe('findOne', () => {
    it('should call postService.findOne with correct id', async () => {
      const id = '1';
      await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('create', () => {
    it('should call postService.create with correct data', async () => {
      const createPostDto: CreatePostDto = {
        title: 'Test',
        description: 'Test',
        authorId: 1,
      };
      await controller.create(createPostDto);
      expect(service.create).toHaveBeenCalledWith(createPostDto);
    });
  });
});
