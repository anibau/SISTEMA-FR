import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { SaleItem } from './entities/sale-item.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { CompleteSaleDto } from './dto/complete-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
    @InjectRepository(SaleItem)
    private saleItemsRepository: Repository<SaleItem>,
  ) {}

  create(createSaleDto: CreateSaleDto) {
    // Lógica para crear venta y sus items
    return this.salesRepository.save(createSaleDto);
  }

  findAll() {
    return this.salesRepository.find();
  }

  findOne(id: number) {
    return this.salesRepository.findOne({ where: { id } });
  }

  complete(id: number, completeSaleDto: CompleteSaleDto) {
    // Lógica para completar venta
    return { id, ...completeSaleDto, status: 'completed' };
  }
} 