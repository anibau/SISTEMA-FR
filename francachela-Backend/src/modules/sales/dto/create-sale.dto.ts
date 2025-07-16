export class CreateSaleDto {
  total: number;
  date: Date;
  items: { productId: number; quantity: number; price: number }[];
} 