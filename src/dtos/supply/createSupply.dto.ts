import { Driver } from 'src/entities/driver/driver.entity';

export class CreateSupplyDto {
  driver: Driver;
  liters: number;
  fuel: string;
}
