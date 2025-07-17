import { Controller, Get, Post, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateMovementDto } from './dto/create-movement.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('movements')
  findAllMovements() {
    return this.inventoryService.findAllMovements();
  }

  @Post('adjust')
  adjustStock(@Body() dto: CreateMovementDto) {
    return this.inventoryService.adjustStock(dto);
  }
} 