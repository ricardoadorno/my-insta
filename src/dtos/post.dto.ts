import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsInt()
  authorId: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  image?: string;
}

export class GetPostDto {
  id: number;
  title: string;
  description: string;
  image: string;
  authorId: number;

  private constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    authorId: number,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.authorId = authorId;
  }

  static from(model: Partial<GetPostDto>) {
    return new GetPostDto(
      model.id,
      model.title,
      model.description,
      model.image,
      model.authorId,
    );
  }
}
