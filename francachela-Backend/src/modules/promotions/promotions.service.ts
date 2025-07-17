import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promotion } from './entities/promotion.entity';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

@Injectable()
export class PromotionsService {
  constructor(
    @InjectRepository(Promotion)
    private promotionsRepository: Repository<Promotion>,
  ) {}

  create(createPromotionDto: CreatePromotionDto) {
    const promo = this.promotionsRepository.create(createPromotionDto);
    return this.promotionsRepository.save(promo);
  }

  findAll() {
    return this.promotionsRepository.find();
  }

  update(id: number, updatePromotionDto: UpdatePromotionDto) {
    return this.promotionsRepository.update(id, updatePromotionDto);
  }

  remove(id: number) {
    return this.promotionsRepository.delete(id);
  }
} 