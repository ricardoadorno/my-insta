import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { CreateCommentDto } from '@dtos/comment.dto';

@Injectable()
export class CommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateCommentDto) {
    return this.prisma.comment.create({ data });
  }

  findByPost(postId: number) {
    return this.prisma.comment.findMany({
      where: { postId },
      include: { author: true },
    });
  }
}
