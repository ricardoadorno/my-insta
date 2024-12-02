import { Injectable } from '@nestjs/common';
import { CreatePostDto, GetPostDto } from '@dtos/post.dto';
import { PostRepository } from '@repositories/post/post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async create(data: CreatePostDto) {
    return GetPostDto.from(await this.postRepository.create(data));
  }

  async findMany({ authorId }: { authorId?: string }) {
    if (authorId) {
      return this.postRepository.findByUser(+authorId);
    }

    return this.postRepository.findAll();
  }

  async findOne(id: number) {
    return this.postRepository.findOne(id);
  }
}
