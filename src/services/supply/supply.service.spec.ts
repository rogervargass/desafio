import { Test } from '@nestjs/testing';
import { SupplyService } from './supply.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Supply } from 'src/entities/supply/supply.entity';
import { DriverService } from '../driver/driver.service';
import { Driver } from 'src/entities/driver/driver.entity';
import { Repository } from 'typeorm';
import { FUEL_PRICES, FuelType } from 'src/types/fuelType';

const mockListSuppliesResponseDb = [
  {
    id: '123',
    fuel: 'GASOLINE',
    liters: 10,
    createdAt: new Date(),
    totalPrice: 59.5,
    driver: {
      id: '1',
      name: 'Roger',
    },
  },
  {
    id: '1234',
    fuel: 'GASOLINE',
    liters: 10,
    createdAt: new Date(),
    totalPrice: 59.5,
    driver: {
      id: '2',
      name: 'Roger',
    },
  },
];

const mockListSuppliesResponse = [
  {
    id: '123',
    fuel: 'GASOLINE',
    liters: 10,
    createdAt: new Date(),
    totalPrice: 59.5,
    driverId: '1',
    driverName: 'Roger',
  },
  {
    id: '1234',
    fuel: 'GASOLINE',
    liters: 10,
    createdAt: new Date(),
    totalPrice: 59.5,
    driverId: '2',
    driverName: 'Roger',
  },
];

const mockDriver = {
  id: '1',
  name: 'Roger',
  document: '11111111111',
  supplies: [],
};

describe('Supply Service Test', () => {
  let supplyService: SupplyService;
  let supplyRepository: Repository<Supply>;

  const SUPPLY_REPOSITORY_TOKEN = getRepositoryToken(Supply);
  const DRIVER_REPOSITORY_TOKEN = getRepositoryToken(Driver);

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        SupplyService,
        DriverService,
        {
          provide: SUPPLY_REPOSITORY_TOKEN,
          useValue: {
            save: jest.fn().mockReturnValue(mockListSuppliesResponseDb[0]),
            find: jest.fn().mockReturnValue(mockListSuppliesResponseDb),
          },
        },
        {
          provide: DRIVER_REPOSITORY_TOKEN,
          useValue: {
            findOne: jest.fn().mockReturnValue(mockDriver),
          },
        },
      ],
    }).compile();

    supplyService = moduleRef.get<SupplyService>(SupplyService);
    supplyRepository = moduleRef.get<Repository<Supply>>(
      SUPPLY_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(supplyService).toBeDefined();
  });

  describe('createSupply', () => {
    it('should call supplyRepository once', async () => {
      await supplyService.createSupply('11111111111', 'GASOLINE', 3);
      expect(supplyRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should create a supply and return', async () => {
      const response = await supplyService.createSupply(
        '11111111111',
        'GASOLINE',
        3,
      );
      expect(response).toEqual(mockListSuppliesResponseDb[0]);
    });
  });

  describe('listAllSupplies', () => {
    it('should call supplyRepository once', async () => {
      await supplyService.listAllSupplies();
      expect(supplyRepository.find).toHaveBeenCalledTimes(1);
    });

    it('should return a list of supplies', async () => {
      const response = await supplyService.listAllSupplies();
      expect(response).toEqual(mockListSuppliesResponse);
    });
  });

  describe('calculateTotalPrice', () => {
    it('should calculate correct price', async () => {
      const expectedPrice = FUEL_PRICES[FuelType.GASOLINE] * 10;
      const response = supplyService.calculateTotalPrice(10, FuelType.GASOLINE);
      expect(expectedPrice).toEqual(response);
    });

    it('should not calculate correct price', async () => {
      const expectedPrice = FUEL_PRICES[FuelType.GASOLINE] * 100;
      const response = supplyService.calculateTotalPrice(10, FuelType.GASOLINE);
      expect(expectedPrice).not.toEqual(response);
    });
  });
});
