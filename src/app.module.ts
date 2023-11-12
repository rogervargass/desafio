import { Module } from '@nestjs/common';
import { SupplyModule } from './modules/supply.module';
import { DriverModule } from './modules/driver.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './infra/config/postgres.config.service';

@Module({
  imports: [
    SupplyModule,
    DriverModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
})
export class AppModule {}
