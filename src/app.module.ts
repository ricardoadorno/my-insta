import { Module } from '@nestjs/common';
import { PostController } from './controllers/post/post.controller';
import { UserController } from './controllers/user/user.controller';
import { CommentController } from './controllers/comment/comment.controller';
import { CommentService } from './services/comment/comment.service';
import { UserService } from './services/user/user.service';
import { PostService } from './services/post/post.service';
import { PostRepository } from './repositories/post/post.repository';
import { UserRepository } from './repositories/user/user.repository';
import { CommentRepository } from './repositories/comment/comment.repository';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [],
  controllers: [PostController, UserController, CommentController],
  providers: [
    PrismaService,
    CommentService,
    UserService,
    PostService,
    PostRepository,
    UserRepository,
    CommentRepository,
  ],
})
export class AppModule {}
