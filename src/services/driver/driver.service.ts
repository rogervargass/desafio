import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListDriversDto } from 'src/dtos/driver/listDrivers.dto';
import { Driver } from 'src/entities/driver/driver.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ) {}

  async createDriver(name: string, cpf: string) {
    const driver = new Driver(name, cpf);
    await this.driverRepository.save(driver);
  }

  async listAllDrivers(): Promise<ListDriversDto[]> {
    const registeredDrivers = await this.driverRepository.find();
    const driversList = registeredDrivers.map(
      (driver) =>
        new ListDriversDto(driver.id, driver.name, driver.cpf, driver.supplies),
    );

    return driversList;
  }

  async findDriverByCpf(cpf: string): Promise<Driver> {
    return await this.driverRepository.findOne({
      where: { cpf },
    });
  }

  async isDriverExist(cpf: string): Promise<boolean> {
    return await this.driverRepository.exist({
      where: { cpf },
    });
  }
}
