import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverController } from 'src/controllers/driver/driver.controller';
import { Driver } from 'src/entities/driver/driver.entity';
import { DriverService } from 'src/services/driver/driver.service';
import { IsDriverAlreadyExistValidator } from 'src/validators/IsDriverAlreadyExist.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  controllers: [DriverController],
  providers: [DriverService, IsDriverAlreadyExistValidator],
  exports: [DriverService],
})
export class DriverModule {}
