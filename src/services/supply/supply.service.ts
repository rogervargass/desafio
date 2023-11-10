import { Injectable } from '@nestjs/common';
import { Driver } from 'src/entities/driver/driver.entity';
import { FUEL_PRICES, FuelType } from 'src/entities/supply/fuelType';
import { Supply } from 'src/entities/supply/supply.entity';

@Injectable()
export class SupplyService {
  createSupply(driver: Driver, fuel: string, liters: number): Supply {
    const supply = new Supply(driver, fuel, liters);
    const total = this.calculateTotalPrice(
      supply.getLiters(),
      supply.getFuel(),
    );
    supply.setTotalPrice(total);
    return supply;
  }

  private calculateTotalPrice(liters: number, fuel: FuelType): number {
    return liters * FUEL_PRICES[fuel];
  }
}
