import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('low-stock')
  findLowStock() {
    return this.productsService.findLowStock();
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Post('import')
  importProducts() {
    // Placeholder: lógica de importación desde Excel/CSV
    return { message: 'Importación de productos (placeholder)' };
  }

  @Get('export')
  exportProducts() {
    // Placeholder: lógica de exportación a Excel/CSV
    return { message: 'Exportación de productos (placeholder)' };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
} 