import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FUEL_PRICES, FuelType } from 'src/entities/supply/fuelType';
import { Supply } from 'src/entities/supply/supply.entity';
import { Repository } from 'typeorm';
import { DriverService } from '../driver/driver.service';

@Injectable()
export class SupplyService {
  constructor(
    @InjectRepository(Supply)
    private supplyRepository: Repository<Supply>,
    private readonly driverService: DriverService,
  ) {}
  async createSupply(
    driverCpf: string,
    fuel: string,
    liters: number,
  ): Promise<void> {
    const driver = await this.driverService.findDriverByCpf(driverCpf);
    const supply = new Supply(driver, fuel, liters);
    const total = this.calculateTotalPrice(supply.liters, supply.fuel);
    supply.setTotalPrice(total);
    await this.supplyRepository.save(supply);
  }

  async listAllSupplies(): Promise<Supply[]> {
    const supplies = await this.supplyRepository.find();
    return supplies;
  }

  private calculateTotalPrice(liters: number, fuel: FuelType): number {
    return liters * FUEL_PRICES[fuel];
  }
}
