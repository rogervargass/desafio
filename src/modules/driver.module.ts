import { Module } from '@nestjs/common';
import { DriverController } from 'src/controllers/driver/driver.controller';
import { DriverService } from 'src/services/driver/driver.service';

@Module({
  imports: [],
  controllers: [DriverController],
  providers: [DriverService],
})
export class DriverModule {}
