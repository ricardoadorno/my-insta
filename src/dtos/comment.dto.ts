import { IsInt, IsString } from 'class-validator';
import { GetUserDto } from './user.dto';

export interface GetCommentDto {
  user: GetUserDto;
  content: string;
}

export class CreateCommentDto {
  @IsInt()
  postId: number;

  @IsInt()
  authorId: number;

  @IsString()
  content: string;
}
