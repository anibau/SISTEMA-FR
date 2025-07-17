import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThanOrEqual, getManager } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { SaleItem } from './entities/sale-item.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { CompleteSaleDto } from './dto/complete-sale.dto';
import { ProductsService } from '../products/products.service';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
    @InjectRepository(SaleItem)
    private saleItemsRepository: Repository<SaleItem>,
    private productsService: ProductsService,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    // Validar stock y descontar
    for (const item of createSaleDto.items) {
      const product = await this.productsService.findOne(item.productId);
      if (!product) throw new BadRequestException('Producto no encontrado');
      if (product.stock < item.quantity) throw new BadRequestException(`Stock insuficiente para ${product.name}`);
    }
    // Descontar stock
    for (const item of createSaleDto.items) {
      await this.productsService.decrementStock(item.productId, item.quantity);
    }
    // Registrar venta
    try {
      return await this.salesRepository.save(createSaleDto);
    } catch (error) {
      throw new BadRequestException('Error al registrar la venta');
    }
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

  async getDailyReport() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return this.salesRepository.find({ where: { date: Between(today, tomorrow) } });
  }

  async getMonthlyReport() {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    return this.salesRepository.find({ where: { date: Between(firstDay, lastDay) } });
  }

  async getTopProducts() {
    // Consulta agregada para productos más vendidos
    const entityManager = this.salesRepository.manager;
    return entityManager.query(`
      SELECT si."productId", SUM(si.quantity) as totalSold
      FROM sale_item si
      GROUP BY si."productId"
      ORDER BY totalSold DESC
      LIMIT 10
    `);
  }
} 