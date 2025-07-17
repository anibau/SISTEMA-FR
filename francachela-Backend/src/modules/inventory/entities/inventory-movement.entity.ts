import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InventoryMovement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column('int')
  quantity: number;

  @Column()
  type: string; // entrada, salida, ajuste

  @Column({ nullable: true })
  reason?: string;

  @Column()
  date: Date;
} 