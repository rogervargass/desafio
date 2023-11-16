import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { CreateSupplyDto } from 'src/dtos/supply/createSupply.dto';
import { Supply } from 'src/entities/supply/supply.entity';
import { SupplyService } from 'src/services/supply/supply.service';

@Controller('supply')
export class SupplyController {
  constructor(private readonly supplyService: SupplyService) {}

  @Post()
  @ApiCreatedResponse()
  createSupply(@Body() createSupplyDto: CreateSupplyDto) {
    const { driverCpf, fuel, liters } = createSupplyDto;
    return this.supplyService.createSupply(driverCpf, fuel, parseInt(liters));
  }

  @Get()
  @ApiResponse({ type: Supply, isArray: true })
  listAllSupplies() {
    return this.supplyService.listAllSupplies();
  }
}
