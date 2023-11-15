import { Supply } from 'src/entities/supply/supply.entity';

export class ListDriverDto {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly document: string,
    readonly supplies: Supply[],
  ) {}
}
