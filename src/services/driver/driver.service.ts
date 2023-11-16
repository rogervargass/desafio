import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListDriverDto } from 'src/dtos/driver/listDriver.dto';
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
    return this.driverRepository.create(driver);
  }

  async listAllDrivers(): Promise<ListDriverDto[]> {
    const registeredDrivers = await this.driverRepository.find({
      relations: {
        supplies: true,
      },
    });
    const driversList = registeredDrivers.map(
      (driver) =>
        new ListDriverDto(driver.id, driver.name, driver.cpf, driver.supplies),
    );

    return driversList;
  }

  async findDriverById(id: string): Promise<Driver> {
    return await this.driverRepository.findOne({
      where: { id },
      relations: {
        supplies: true,
      },
    });
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
