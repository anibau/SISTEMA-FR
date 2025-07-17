import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  discountPercent?: number;

  @Column('int', { nullable: true })
  minQuantity?: number;

  @Column({ nullable: true })
  comboDescription?: string;

  @Column({ nullable: true })
  startDate?: Date;

  @Column({ nullable: true })
  endDate?: Date;
} 