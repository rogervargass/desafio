import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DriverService } from './driver.service';
import { Driver } from 'src/entities/driver/driver.entity';
import { Repository } from 'typeorm';

const mockDriver = {
  id: '123',
  name: 'Roger',
  document: '11111111111',
  supplies: [],
};

const mockDriverDb = {
  id: '123',
  name: 'Roger',
  cpf: '11111111111',
  supplies: [],
};

const mockDriver2 = {
  id: '123',
  name: 'Roger',
  document: '11111111111',
  supplies: [],
};

const mockDriverDb2 = {
  id: '123',
  name: 'Roger',
  cpf: '11111111111',
  supplies: [],
};

const mockDriversDb = [mockDriverDb, mockDriverDb2];

describe('Driver Service Test', () => {
  let driverService: DriverService;
  let driverRepository: Repository<Driver>;

  const DRIVER_REPOSITORY_TOKEN = getRepositoryToken(Driver);

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        DriverService,
        {
          provide: DRIVER_REPOSITORY_TOKEN,
          useValue: {
            save: jest.fn().mockReturnValue(mockDriver),
            find: jest.fn().mockReturnValue(mockDriversDb),
            findOne: jest.fn().mockReturnValue(mockDriver),
            exist: jest.fn().mockReturnValue(true),
          },
        },
      ],
    }).compile();

    driverService = moduleRef.get<DriverService>(DriverService);
    driverRepository = moduleRef.get<Repository<Driver>>(
      DRIVER_REPOSITORY_TOKEN,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('driverService should be defined', () => {
    expect(driverService).toBeDefined();
  });

  it('driverRepository should be defined', () => {
    expect(driverRepository).toBeDefined();
  });

  describe('createDriver', () => {
    it('should call driverRepository once', async () => {
      await driverService.createDriver('roger', '11111111111');
      expect(driverRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should return a driver created', async () => {
      const response = await driverService.createDriver('roger', '11111111111');
      expect(response).toEqual(mockDriver);
    });
  });

  describe('listAllDrivers', () => {
    it('should call driverRepository once', async () => {
      await driverService.listAllDrivers();
      expect(driverRepository.find).toHaveBeenCalledTimes(1);
    });

    it('should return a list of drivers', async () => {
      const response = await driverService.listAllDrivers();
      expect(response).toEqual([mockDriver, mockDriver2]);
    });
  });

  describe('findDriverById', () => {
    it('should call driverRepository once', async () => {
      await driverService.findDriverById('123');
      expect(driverRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return a driver with id correct', async () => {
      const response = await driverService.findDriverById('123');
      expect(response).toEqual(mockDriver);
    });
  });

  describe('findDriverByCpf', () => {
    it('should call driverRepository once', async () => {
      await driverService.findDriverByCpf('11111111111');
      expect(driverRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return a driver with cpf correct', async () => {
      const response = await driverService.findDriverByCpf('11111111111');
      expect(response).toEqual(mockDriver);
    });
  });

  describe('isDriverExist', () => {
    it('should call driverRepository once', async () => {
      await driverService.isDriverExist('11111111111');
      expect(driverRepository.exist).toHaveBeenCalledTimes(1);
    });

    it('should return a true if drive exist', async () => {
      const response = await driverService.isDriverExist('11111111111');
      expect(response).toBeTruthy();
    });
  });
});
