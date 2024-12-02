import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '@services/user/user.service';
import { CreateUserDto, GetUserDto } from '@dtos/user.dto';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto: CreateUserDto = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password',
      };

      jest.spyOn(userService, 'create').mockResolvedValue();

      expect(await controller.create(createUserDto)).toStrictEqual({
        statusCode: 201,
        message: 'User created successfully',
      });
      expect(userService.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result: GetUserDto[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
      ];
      jest.spyOn(userService, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
      expect(userService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const result: GetUserDto = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
      };
      jest.spyOn(userService, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toBe(result);
      expect(userService.findOne).toHaveBeenCalledWith(1);
    });
  });
});
