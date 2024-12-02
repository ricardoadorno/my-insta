import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { CreatePostDto } from '@dtos/post.dto';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePostDto) {
    return this.prisma.post.create({ data });
  }

  async findAll() {
    return this.prisma.post.findMany();
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async findByUser(authorId: number) {
    return this.prisma.post.findMany({
      where: { authorId },
      include: { comments: true },
    });
  }
}
