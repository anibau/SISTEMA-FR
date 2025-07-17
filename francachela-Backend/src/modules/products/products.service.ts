import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { LessThan } from 'typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    if (!createProductDto.name || createProductDto.price == null || createProductDto.stock == null) {
      throw new BadRequestException('Datos de producto incompletos');
    }
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  async findAll() {
    return this.productsRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Producto no encontrado');
    Object.assign(product, updateProductDto);
    return this.productsRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Producto no encontrado');
    return this.productsRepository.remove(product);
  }

  async findLowStock() {
    return this.productsRepository.find({ where: { stock: LessThan(10) } });
  }

  async decrementStock(productId: number, quantity: number) {
    const product = await this.productsRepository.findOne({ where: { id: productId } });
    if (!product) throw new Error('Producto no encontrado');
    product.stock -= quantity;
    await this.productsRepository.save(product);
  }
} 