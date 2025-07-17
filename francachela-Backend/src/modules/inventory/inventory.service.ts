import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryMovement } from './entities/inventory-movement.entity';
import { CreateMovementDto } from './dto/create-movement.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(InventoryMovement)
    private movementRepository: Repository<InventoryMovement>,
  ) {}

  findAllMovements() {
    return this.movementRepository.find();
  }

  async adjustStock(dto: CreateMovementDto) {
    const movement = this.movementRepository.create({ ...dto, date: new Date() });
    return this.movementRepository.save(movement);
  }
} 