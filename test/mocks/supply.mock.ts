export const mockListSuppliesResponse = [
  {
    id: 'e8e6fd7d-73c7-456a-bcc9-6e4ac9ac29bf',
    fuel: 'GASOLINE',
    liters: 10,
    createdAt: new Date(),
    totalPrice: 59.5,
    driverId: '183a3fcd-fe5b-4f39-ab7f-d65e234c6c31',
    driverNane: 'Roger',
  },
  {
    id: '7fca80bf-3672-4560-acd9-ef953d3301dc',
    fuel: 'GASOLINE',
    liters: 10,
    createdAt: new Date(),
    totalPrice: 59.5,
    driverId: '183a3fcd-fe5b-4f39-ab7f-d65e234c6c31',
    driverNane: 'Roger',
  },
];

export const mockTypeORM = {
  supply: {
    find: jest.fn().mockReturnValue(mockListSuppliesResponse),
  },
  driver: {},
};
