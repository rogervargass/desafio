import { Module } from '@nestjs/common';
import { SupplyModule } from './modules/supply.module';
import { DriverModule } from './modules/driver.module';

@Module({
  imports: [SupplyModule, DriverModule],
})
export class AppModule {}
