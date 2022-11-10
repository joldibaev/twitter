import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

const MESSAGES = {
  NOT_FOUND: 'User Not Found',
  ALREADY_EXISTS: 'User already exists',
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(email: string): Promise<User> {
    const usersCount = await this.prisma.user.count({ where: { email } });

    if (usersCount > 0) {
      throw new ForbiddenException(MESSAGES.ALREADY_EXISTS);
    }

    return this.prisma.user.create({ data: { email } });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException(MESSAGES.NOT_FOUND);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const usersCount = await this.prisma.user.count({ where: { id } });

    if (!usersCount) {
      throw new NotFoundException(MESSAGES.NOT_FOUND);
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });
  }

  async remove(id: number): Promise<User> {
    const usersCount = await this.prisma.user.count({ where: { id } });

    if (!usersCount) {
      throw new NotFoundException(MESSAGES.NOT_FOUND);
    }

    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
