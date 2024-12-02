import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateCommentDto } from '@dtos/comment.dto';
import { CommentService } from '@services/comment/comment.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() body: CreateCommentDto) {
    return this.commentService.create(body);
  }

  @Get()
  find(@Query() { postId }: { postId: string }) {
    return this.commentService.find({ postId });
  }
}
