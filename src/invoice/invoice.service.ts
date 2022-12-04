import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerService } from '../customer/customer.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice) private _productRepository: Repository<Invoice>,
    private _customerService: CustomerService,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    const newInvoice = createInvoiceDto;
    const customer = await this._customerService
      .findOne(createInvoiceDto['customerId'])
      .then((cust) => {
        newInvoice.customer = cust;
      });
    console.log(customer);
    return this._productRepository.save(await newInvoice);
  }

  findAll() {
    return `This action returns all invoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
