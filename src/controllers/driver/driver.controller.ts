import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDriverDto } from 'src/dtos/driver/createDriver.dto';
import { DriverService } from 'src/services/driver/driver.service';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  createDriver(@Body() createDriverDto: CreateDriverDto) {
    const { name, cpf } = createDriverDto;
    return this.driverService.createDriver(name, cpf);
  }

  @Get()
  listAllDrivers() {
    return this.driverService.listAllDrivers();
  }
}
