import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./entities/customer.entity";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private _customerRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = createCustomerDto;
    const customerDAO = this._customerRepository.create(newCustomer);
    return this._customerRepository.save(customerDAO);
  }

  findAll() {
    return this._customerRepository.find();
  }

  async findOne(id: number): Promise<Customer> {
    return await this._customerRepository.findOneBy({ id });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return this._customerRepository.delete({ id: id });
  }
}
