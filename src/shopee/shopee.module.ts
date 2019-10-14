import { Module } from '@nestjs/common';
import { ShopeeController } from './shopee.controller';
import { ShopeeService } from './shopee.service';

@Module({
  controllers: [ShopeeController],
  providers: [ShopeeService],
  exports: [ShopeeService],
})
export class ShopeeModule {}
