import { Injectable } from '@nestjs/common';
import { Driver } from 'src/entities/driver/driver.entity';

@Injectable()
export class DriverService {
  createDriver(name: string, cpf: string) {
    const newDriver = new Driver(name, cpf);
    return newDriver;
  }
}
