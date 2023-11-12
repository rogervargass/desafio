import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { DriverService } from 'src/services/driver/driver.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsDriverAlreadyExistValidator
  implements ValidatorConstraintInterface
{
  constructor(private driverService: DriverService) {}

  async validate(value: string): Promise<boolean> {
    const driverWithCpfExists = await this.driverService.isDriverExist(value);
    return !driverWithCpfExists;
  }
}

export const IsDriverAlreadyExist = (validationOptions: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsDriverAlreadyExistValidator,
    });
  };
};
