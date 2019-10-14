import { Injectable } from '@nestjs/common';
import * as request from 'request';
import * as camelcaseKeys from 'camelcase-keys';
import { ShopeeProductResponse } from './dto/product.dto';
import { ShopeeResponse } from './../common/model/shopee-response.model';
@Injectable()
export class ShopeeService {
    async getProducts(): Promise<ShopeeProductResponse> {
        const cookieStr = 'SC_DFP=xLwfWMZa9dotzRLx3AYjHW57IYRGlAMN; _ga=GA1.2.51757892.1564585947; _gcl_au=1.1.66091865.1564586495; _fbp=fb.1.1564586494817.1032081519; _hjid=cae9d146-fddc-4d56-bad1-4e94bec43543; cto_lwid=c220b588-ec21-4a3d-aa76-840eaf1c340b; _ga=GA1.3.51757892.1564585947; _fbc=fb.1.1565660535715.IwAR2roZxg5gykQ1SbzOfR6Aw4bMM2gY1ESerQsotUTbq-hR6lhTew_RAWff8; SPC_T_F=1; _gcl_aw=GCL.1569136898.Cj0KCQjwt5zsBRD8ARIsAJfI4Bgo5nJIrZK18kRAVVPyknksIBk01bGwvN2n0RDKEP9DNjt9bRzY1G4aApt1EALw_wcB; _gac_UA-61914164-6=1.1569136901.Cj0KCQjwt5zsBRD8ARIsAJfI4Bgo5nJIrZK18kRAVVPyknksIBk01bGwvN2n0RDKEP9DNjt9bRzY1G4aApt1EALw_wcB; fbm_421039428061656=base_domain=.shopee.vn; _med=refer; SPC_SC_UD=129443505; SPC_U=129443505; SPC_SC_TK=ee4268ba7e25d475f798e61b54897666; SPC_EC="P+/OfHHtLZjTtaDJkGNCI6FTnPDnd2Riu9DzmjckaSourlEC+qvAkD4tpXlqX8HvMKb6u/SC5928/ielhMVnPlR9gbbGYM85HICcwGjHLkW9Sxnu/VxSOXU1okSqdbKdAL8ygTFtJ1+wIoDtGOXgiqKecBRkN92BXpLi7ns007U="; SPC_SI=ew1uh5oltf6wp23qdfka1ho7q6kibtqt; _gid=GA1.2.827604993.1570977453; SPC_CDS=e4f3b0cf-e0a4-4790-a9e3-40073cba7852; SC_U=129443505; SPC_F=7obpZkMZET8l8crw4o2zheHXJPxENbVZ; AMP_TOKEN=%24NOT_FOUND; SPC_T_IV="9YVD1RJWt21rvv/MzCcrUg=="; SPC_T_ID="+2BkvXM1ARGjDSqK58CNZlWbduUGw53lCR+n5J0l1kp5rtEuTLgaJCvWMOk6Cm3e6QgLL1iYa84jJdfQ7Te7nNfyec8lyP1HS/gS/ciKRNE="';
        const cookie = request.cookie(cookieStr);
        const urlGet: string = `https://banhang.shopee.vn/api/v3/product/page_product_list/?
    SPC_CDS=b51b404c-f238-42d2-8e9d-789b70cf12b4&SPC_CDS_VER=2&page_number=1&page_size=50&list_type=`;
        return new Promise<ShopeeProductResponse>((resolve, reject) => {
            request(
                {
                    url: urlGet,
                    jar: true,
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
                        'Accept': 'application/json, text/plain, */*',
                        'Cookie': cookie,
                    },
                }, (error, response, body) => {
                    if (error) {
                        return reject(camelcaseKeys(JSON.parse(error), { deep: true }));
                    }
                    resolve(camelcaseKeys(JSON.parse(body), { deep: true }) as any);
                });
        });
    }

    async boost(productId: number): Promise<ShopeeResponse> {
        const cookieStr = 'SC_DFP=xLwfWMZa9dotzRLx3AYjHW57IYRGlAMN; _ga=GA1.2.51757892.1564585947; _gcl_au=1.1.66091865.1564586495; _fbp=fb.1.1564586494817.1032081519; _hjid=cae9d146-fddc-4d56-bad1-4e94bec43543; cto_lwid=c220b588-ec21-4a3d-aa76-840eaf1c340b; _ga=GA1.3.51757892.1564585947; _fbc=fb.1.1565660535715.IwAR2roZxg5gykQ1SbzOfR6Aw4bMM2gY1ESerQsotUTbq-hR6lhTew_RAWff8; SPC_T_F=1; _gcl_aw=GCL.1569136898.Cj0KCQjwt5zsBRD8ARIsAJfI4Bgo5nJIrZK18kRAVVPyknksIBk01bGwvN2n0RDKEP9DNjt9bRzY1G4aApt1EALw_wcB; _gac_UA-61914164-6=1.1569136901.Cj0KCQjwt5zsBRD8ARIsAJfI4Bgo5nJIrZK18kRAVVPyknksIBk01bGwvN2n0RDKEP9DNjt9bRzY1G4aApt1EALw_wcB; fbm_421039428061656=base_domain=.shopee.vn; _med=refer; SPC_SC_UD=129443505; SPC_U=129443505; SPC_SC_TK=ee4268ba7e25d475f798e61b54897666; SPC_EC="P+/OfHHtLZjTtaDJkGNCI6FTnPDnd2Riu9DzmjckaSourlEC+qvAkD4tpXlqX8HvMKb6u/SC5928/ielhMVnPlR9gbbGYM85HICcwGjHLkW9Sxnu/VxSOXU1okSqdbKdAL8ygTFtJ1+wIoDtGOXgiqKecBRkN92BXpLi7ns007U="; SPC_SI=ew1uh5oltf6wp23qdfka1ho7q6kibtqt; _gid=GA1.2.827604993.1570977453; SPC_CDS=e4f3b0cf-e0a4-4790-a9e3-40073cba7852; SC_U=129443505; SPC_F=7obpZkMZET8l8crw4o2zheHXJPxENbVZ; AMP_TOKEN=%24NOT_FOUND; SPC_T_IV="9YVD1RJWt21rvv/MzCcrUg=="; SPC_T_ID="+2BkvXM1ARGjDSqK58CNZlWbduUGw53lCR+n5J0l1kp5rtEuTLgaJCvWMOk6Cm3e6QgLL1iYa84jJdfQ7Te7nNfyec8lyP1HS/gS/ciKRNE="';
        const urlBoost = `https://banhang.shopee.vn/api/v3/product/boost_product/?SPC_CDS=b51b404c-f238-42d2-8e9d-789b70cf12b4&SPC_CDS_VER=2`;
        return new Promise((resolve, reject) => {
            request.post(
                {
                    url: urlBoost,
                    jar: true,
                    body: JSON.stringify({ id: productId }),
                    headers: {
                        'User-Agent':
                            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Origin': 'https://banhang.shopee.vn',
                        'cookie': cookieStr,
                    },
                },
                (error, response, body) => {
                    const res = camelcaseKeys(JSON.parse(body), {deep: true}) as any as ShopeeResponse;
                    if (res.code > 0) {
                        return reject(res);
                    }
                    resolve(res);
                });
        });
    }
}
