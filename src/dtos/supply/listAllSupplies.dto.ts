export class ListSuppliesDto {
  constructor(
    readonly id: string,
    readonly fuel: string,
    readonly liters: number,
    readonly createdAt: Date,
    readonly totalPrice: number,
    readonly driverName: string,
    readonly driverId: string,
  ) {}
}
