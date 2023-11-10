export class Driver {
  private readonly id: string;
  private readonly name: string;
  private readonly cpf: string;
  private readonly createdAt: Date;
  private updatedAt: Date;

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
    this.createdAt = new Date();
  }

  getName() {
    return this.name;
  }

  getCpf() {
    return this.cpf;
  }

  getId() {
    return this.id;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  setUpdatedAt(value: Date) {
    this.updatedAt = value;
  }
}
