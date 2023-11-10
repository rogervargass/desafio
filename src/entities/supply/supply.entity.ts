import { Driver } from '../driver/driver.entity';
import { FuelType } from './fuelType';

export class Supply {
  private readonly id: string;
  private readonly driver: Driver;
  private readonly fuel: FuelType;
  private readonly liters: number;
  private totalPrice: number;
  private readonly createdAt: Date;

  constructor(driver: Driver, fuel: string, liters: number) {
    this.driver = driver;
    this.fuel = FuelType[fuel];
    this.liters = liters;
    this.createdAt = new Date();
    this.totalPrice = 0;
  }

  getDriver() {
    return this.driver;
  }

  getFuel(): FuelType {
    return this.fuel;
  }

  getLiters(): number {
    return this.liters;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  setTotalPrice(value: number): void {
    this.totalPrice = value;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getId() {
    return this.id;
  }
}
