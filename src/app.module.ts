import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoostModule } from './boost/boost.module';
import { ShopeeModule } from './shopee/shopee.module';

@Module({
  imports: [BoostModule, ShopeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
