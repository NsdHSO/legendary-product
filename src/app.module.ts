import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config.service';
import { ProductModule } from './product/product.module';
import { ImageModule } from './image/image.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import { StateCattleModule } from './state-cattle/state-cattle.module';
import { RabbitModule } from './rabbit/rabbit.module';
import { RabbitCategoryModule } from './rabbit-category/rabbit-category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ProductModule,
    ImageModule,
    InvoiceModule,
    CustomerModule,
    StateCattleModule,
    RabbitModule,
    RabbitCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private _dataSource: DataSource) {}
}
