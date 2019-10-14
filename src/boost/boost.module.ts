import { Module } from '@nestjs/common';
import { BoostController } from './boost.controller';
import { BoostService } from './boost.service';
import { ShopeeModule } from './../shopee/shopee.module';

@Module({
  imports: [ShopeeModule],
  controllers: [BoostController],
  providers: [BoostService],
})
export class BoostModule {}
