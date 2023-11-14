import { Driver } from 'src/entities/driver/driver.entity';

export class ListSuppliesDto {
  constructor(
    readonly id: string,
    readonly fuel: string,
    readonly liters: number,
    readonly createdAt: Date,
    readonly totalPrice: number,
    readonly driver: Driver,
  ) {}
}
