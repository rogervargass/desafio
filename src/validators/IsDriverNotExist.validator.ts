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
export class IsDriverNotExistValidator implements ValidatorConstraintInterface {
  constructor(private driverService: DriverService) {}

  async validate(value: string): Promise<boolean> {
    return await this.driverService.isDriverExist(value);
  }
}

export const IsDriverNotExist = (validationOptions: ValidationOptions) => {
  return (object: object, propriedade: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propriedade,
      options: validationOptions,
      constraints: [],
      validator: IsDriverNotExistValidator,
    });
  };
};
