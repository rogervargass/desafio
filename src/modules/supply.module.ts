import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplyController } from 'src/controllers/supply/supply.controller';
import { Supply } from 'src/entities/supply/supply.entity';
import { SupplyService } from 'src/services/supply/supply.service';
import { DriverModule } from './driver.module';
import { IsDriverNotExistValidator } from 'src/validators/IsDriverNotExist.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Supply]), DriverModule],
  controllers: [SupplyController],
  providers: [SupplyService, IsDriverNotExistValidator],
})
export class SupplyModule {}
