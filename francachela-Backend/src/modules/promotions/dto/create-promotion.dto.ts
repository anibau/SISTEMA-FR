export class CreatePromotionDto {
  name: string;
  discountPercent?: number;
  minQuantity?: number;
  comboDescription?: string;
  startDate?: Date;
  endDate?: Date;
} 