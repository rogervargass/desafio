import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Driver } from '../driver/driver.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { FuelType } from 'src/types/fuelType';

@Entity({ name: 'supplies' })
@ApiTags('supply')
export class Supply {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  readonly id: string;

  @ManyToOne(() => Driver, (driver) => driver.supplies, {
    orphanedRowAction: 'delete',
    onUpdate: 'CASCADE',
  })
  @ApiProperty({ type: () => Driver })
  readonly driver: Driver;

  @Column({ name: 'fuel', type: 'enum', enum: FuelType, nullable: false })
  @ApiProperty()
  readonly fuel: FuelType;

  @Column({ name: 'liters', nullable: false })
  @ApiProperty()
  readonly liters: number;

  @Column({ name: 'total_price', type: 'money' })
  @ApiProperty()
  totalPrice: number;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
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
