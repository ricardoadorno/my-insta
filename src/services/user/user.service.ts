import { Injectable } from '@nestjs/common';
import { CreateUserDto, GetUserDto } from '@dtos/user.dto';
import { UserRepository } from '@repositories/user/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(data: CreateUserDto): Promise<void> {
    await this.userRepository.create(data);
  }

  async findAll() {
    const users = await this.userRepository.findAll();

    return users.map(GetUserDto.from);
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);

    return GetUserDto.from(user);
  }
}
