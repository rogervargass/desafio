import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Supply } from '../supply/supply.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Entity({ name: 'drivers' })
@ApiTags('driver')
export class Driver {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  readonly id: string;

  @Column({ name: 'driver_name', length: 100, nullable: false })
  @ApiProperty()
  readonly name: string;

  @Column({ name: 'cpf', length: 11, nullable: false })
  @ApiProperty()
  readonly cpf: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: Date;

  @OneToMany(() => Supply, (supply) => supply.driver, {
    cascade: true,
  })
  @ApiProperty({ type: () => Supply })
  readonly supplies: Supply[];

  constructor(name: string, cpf: string) {
    this.id = uuid();
    this.name = name;
    this.cpf = cpf;
    this.createdAt = new Date();
  }
}
