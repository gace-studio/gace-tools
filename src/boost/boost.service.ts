import { Injectable } from '@nestjs/common';
import { ShopeeService } from './../shopee/shopee.service';
import { interval, Subscription } from 'rxjs';
@Injectable()
export class BoostService {
    constructor(private shopeeSvc: ShopeeService) { }
    private subscriptionAutoBoost: Subscription;

    public autoBoost(productIds: number[]): Promise<boolean> {
        // const timer = interval(2000);
        const timer = interval(4 * 3600 * 1000 + 5000);
        if (this.subscriptionAutoBoost) {
            this.subscriptionAutoBoost.unsubscribe();
        }
        return new Promise((resolve, reject) => {
            this.subscriptionAutoBoost = timer.subscribe(() => {
                return Promise.all(productIds.map(id => {
                    return this.shopeeSvc.boost(id);
                })).then(() => {
                    resolve(true);
                }).catch((errors) => {
                    reject(errors);
                });
            });
        });

    }
}
