import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDriverDto } from 'src/dtos/driver/createDriver.dto';
import { DriverService } from 'src/services/driver/driver.service';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  createDriver(@Body() createDriverDto: CreateDriverDto) {
    const { name, document } = createDriverDto;
    return this.driverService.createDriver(name, document);
  }

  @Get()
  listAllDrivers() {
    return this.driverService.listAllDrivers();
  }

  @Get(':id')
  listDriverById(@Param('id') driverId: string) {
    return this.driverService.findDriverById(driverId);
  }
}
