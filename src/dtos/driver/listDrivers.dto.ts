import { Supply } from 'src/entities/supply/supply.entity';

export class ListDriversDto {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly cpf: string,
    readonly supplies: Supply[],
  ) {}
}
