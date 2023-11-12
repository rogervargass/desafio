import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FuelType } from './fuelType';
import { Driver } from '../driver/driver.entity';

@Entity({ name: 'supplies' })
export class Supply {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @ManyToOne(() => Driver, (driver) => driver.supplies, {
    orphanedRowAction: 'delete',
    onUpdate: 'CASCADE',
  })
  readonly driver: Driver;

  @Column({ name: 'fuel', type: 'enum', enum: FuelType, nullable: false })
  readonly fuel: FuelType;

  @Column({ name: 'liters', nullable: false })
  readonly liters: number;

  @Column({ name: 'total_price', type: 'money' })
  totalPrice: number;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt: Date;

  constructor(driver: Driver, fuel: string, liters: number) {
    this.driver = driver;
    this.fuel = FuelType[fuel];
    this.liters = liters;
    this.createdAt = new Date();
    this.totalPrice = 0;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  setTotalPrice(value: number): void {
    this.totalPrice = value;
  }
}
