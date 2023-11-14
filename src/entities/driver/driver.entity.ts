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

@Entity({ name: 'drivers' })
export class Driver {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ name: 'driver_name', length: 100, nullable: false })
  readonly name: string;

  @Column({ name: 'cpf', length: 11, nullable: false })
  readonly cpf: string;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Supply, (supply) => supply.driver, {
    cascade: true,
  })
  readonly supplies: Supply[];

  constructor(name: string, cpf: string) {
    this.id = uuid();
    this.name = name;
    this.cpf = cpf;
    this.createdAt = new Date();
  }
}
