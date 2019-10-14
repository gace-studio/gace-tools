import { Controller, Get, Body, Post, Res, HttpStatus } from '@nestjs/common';
import { BoostService } from './boost.service';
import { Response } from 'express';
@Controller('boost')
export class BoostController {

    constructor(private boostSvc: BoostService) { }

    @Post('/auto')
    async autoBoost(@Body() body: { ids: number[] }, @Res() res: Response) {
        try {
            return await this.boostSvc.autoBoost(body.ids);
        } catch (ex) {
            res.status(HttpStatus.BAD_REQUEST).json(ex);
        }
    }
}
