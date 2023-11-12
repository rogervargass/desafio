import { IsNotEmpty, IsPositive, Length } from 'class-validator';
import { IsDriverNotExist } from 'src/validators/IsDriverNotExist.validator';

export class CreateSupplyDto {
  @IsNotEmpty({ message: 'cpf cannot be empty' })
  @Length(11, 11, { message: 'cpf invalid' })
  @IsDriverNotExist({ message: 'cpf not registered' })
  driverCpf: string;

  @IsNotEmpty({ message: 'liters cannot be empty' })
  @IsPositive({ message: 'liters must be positive' })
  liters: number;

  @IsNotEmpty({ message: 'fuel cannot be empty' })
  fuel: string;
}
