import { Controller, Get } from '@nestjs/common';
import { ShopeeService } from './shopee.service';

@Controller('shopee')
export class ShopeeController {

    constructor(private shopeeSvc: ShopeeService) {}

    @Get('/products')
    async getProducts() {
        return await this.shopeeSvc.getProducts();
    }
}
