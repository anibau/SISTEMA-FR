import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    const count = await this.usersRepository.count();
    if (count === 0) {
      const defaultUsers = [
        { username: 'admin', password: await bcrypt.hash('admin123', 10), role: 'admin', email: 'admin@demo.com' },
        { username: 'vendedor', password: await bcrypt.hash('vendedor123', 10), role: 'vendedor', email: 'vendedor@demo.com' },
        { username: 'user', password: await bcrypt.hash('user123', 10), role: 'user', email: 'user@demo.com' },
      ];
      for (const user of defaultUsers) {
        await this.usersRepository.save(user);
      }
    }
  }

  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }

  async findByUsername(username: string) {
    return this.usersRepository.findOne({ where: { username } });
  }
} 