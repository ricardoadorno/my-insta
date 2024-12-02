import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '@dtos/comment.dto';
import { CommentRepository } from '@repositories/comment/comment.repository';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  create(body: CreateCommentDto) {
    return this.commentRepository.create(body);
  }

  find(postId: { postId: string }) {
    return this.commentRepository.findByPost(+postId);
  }
}
