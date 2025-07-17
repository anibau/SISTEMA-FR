import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { OnModuleInit } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

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
        { username: 'test1', password: await bcrypt.hash('test123', 10), role: 'user', email: 'test1@demo.com' },
        { username: 'test2', password: await bcrypt.hash('test123', 10), role: 'vendedor', email: 'test2@demo.com' },
        { username: 'test3', password: await bcrypt.hash('test123', 10), role: 'admin', email: 'test3@demo.com' },
        { username: 'test4', password: await bcrypt.hash('test123', 10), role: 'user', email: 'test4@demo.com' },
        { username: 'test5', password: await bcrypt.hash('test123', 10), role: 'vendedor', email: 'test5@demo.com' },
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

  async updateProfile(id: number, updateUserDto: UpdateUserDto) {
    // Solo permite actualizar email y password
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new BadRequestException('Usuario no encontrado');
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    if (updateUserDto.email) user.email = updateUserDto.email;
    if (updateUserDto.password) user.password = updateUserDto.password;
    return this.usersRepository.save(user);
  }

  async changePassword(id: number, oldPassword: string, newPassword: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new BadRequestException('Usuario no encontrado');
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) throw new BadRequestException('La contraseña anterior es incorrecta');
    user.password = await bcrypt.hash(newPassword, 10);
    await this.usersRepository.save(user);
    return { message: 'Contraseña actualizada correctamente' };
  }
} 