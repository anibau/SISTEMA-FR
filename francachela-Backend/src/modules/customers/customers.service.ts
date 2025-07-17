import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class CustomersService implements OnModuleInit {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    const customer = this.customersRepository.create(createCustomerDto);
    return this.customersRepository.save(customer);
  }

  findAll() {
    return this.customersRepository.find();
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customersRepository.update(id, updateCustomerDto);
  }

  remove(id: number) {
    return this.customersRepository.delete(id);
  }

  async onModuleInit() {
    const count = await this.customersRepository.count();
    if (count === 0) {
      const defaultCustomers = [
        { name: 'Juan Pérez', email: 'juan@example.com', phone: '999111222', points: 10 },
        { name: 'Ana Torres', email: 'ana@example.com', phone: '999222333', points: 20 },
        { name: 'Carlos Ruiz', email: 'carlos@example.com', phone: '999333444', points: 15 },
        { name: 'Lucía Gómez', email: 'lucia@example.com', phone: '999444555', points: 5 },
        { name: 'Pedro Díaz', email: 'pedro@example.com', phone: '999555666', points: 8 },
      ];
      for (const customer of defaultCustomers) {
        await this.customersRepository.save(customer);
      }
    }
  }
} 