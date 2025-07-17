import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { CompleteSaleDto } from './dto/complete-sale.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Post(':id/complete')
  complete(@Param('id') id: string, @Body() completeSaleDto: CompleteSaleDto) {
    return this.salesService.complete(+id, completeSaleDto);
  }

  @Get('reports/daily')
  async dailyReport() {
    return this.salesService.getDailyReport();
  }

  @Get('reports/monthly')
  async monthlyReport() {
    return this.salesService.getMonthlyReport();
  }

  @Get('reports/top-products')
  async topProducts() {
    return this.salesService.getTopProducts();
  }
} 