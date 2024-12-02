import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreatePostDto } from '@dtos/post.dto';
import { PostService } from '@services/post/post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findMany(@Query('authorId') authorId?: string) {
    return this.postService.findMany({ authorId });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }
}
