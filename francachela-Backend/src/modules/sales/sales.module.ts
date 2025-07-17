import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { SaleItem } from './entities/sale-item.entity';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/entities/product.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Sale, SaleItem, Product])],
  controllers: [SalesController],
  providers: [SalesService, ProductsService],
  exports: [SalesService],
})
export class SalesModule {} 