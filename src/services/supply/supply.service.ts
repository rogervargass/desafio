import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListSuppliesDto } from 'src/dtos/supply/listAllSupplies.dto';
import { FUEL_PRICES, FuelType } from 'src/types/fuelType';
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
  ): Promise<Supply> {
    const driver = await this.driverService.findDriverByCpf(driverCpf);
    const supply = new Supply(driver, fuel, liters);
    const total = this.calculateTotalPrice(supply.liters, supply.fuel);
    supply.setTotalPrice(total);
    return this.supplyRepository.create(supply);
  }

  async listAllSupplies(): Promise<ListSuppliesDto[]> {
    const registeredSupplies = await this.supplyRepository.find({
      relations: {
        driver: true,
      },
    });
    const suppliesList = registeredSupplies.map(
      (supply) =>
        new ListSuppliesDto(
          supply.id,
          supply.fuel,
          supply.liters,
          supply.createdAt,
          supply.totalPrice,
          supply.driver.name,
          supply.driver.id,
        ),
    );
    return suppliesList;
  }

  calculateTotalPrice(liters: number, fuel: FuelType): number {
    return liters * FUEL_PRICES[fuel];
  }
}
