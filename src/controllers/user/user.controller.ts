import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateUserDto, GetUserDto } from '@dtos/user.dto';
import { UserService } from '@services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    await this.userService.create(data);

    return {
      statusCode: HttpStatus.CREATED,
      message: 'User created successfully',
    };
  }

  @Get()
  async findAll(): Promise<GetUserDto[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GetUserDto> {
    return await this.userService.findOne(+id);
  }
}
