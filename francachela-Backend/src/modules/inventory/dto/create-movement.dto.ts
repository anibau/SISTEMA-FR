export class CreateMovementDto {
  productId: number;
  quantity: number;
  type: string; // entrada, salida, ajuste
  reason?: string;
} 