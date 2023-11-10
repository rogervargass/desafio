import { Module } from '@nestjs/common';
import { SupplyController } from 'src/controllers/supply/supply.controller';
import { SupplyService } from 'src/services/supply/supply.service';

@Module({
  imports: [],
  controllers: [SupplyController],
  providers: [SupplyService],
})
export class SupplyModule {}
