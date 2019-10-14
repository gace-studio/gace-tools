export interface ShopeeProductResponse {
    message: string;
    code: number;
    data: Data;
    userMessage: string;
}

export interface Data {
    pageInfo: PageInfo;
    list: Product[];
}

export interface Product {
    boostCoolDownSeconds: number;
    addOnDeal: any[];
    likeCount: number;
    images: string[];
    priceBeforeDiscount: string;
    id: number;
    ongoingUpcomingCampaigns: OngoingUpcomingCampaigns;
    inPromotion: boolean;
    viewCount: number;
    useWholesale: boolean;
    attributeStatus: number;
    priceMin: string;
    daysToShip: number;
    createTime: number;
    modelList: ModelList[];
    price: string;
    stock: number;
    status: number;
    priceMax: string;
    bannedInfos: null;
    preOrder: boolean;
    categoryStatus: number;
    wholesaleList: any[];
    flag: number;
    sold: number;
    parentSku: string;
    categoryPath: number[];
    useBundleSale: boolean;
    name: string;
    attributeModel: AttributeModel;
    installmentTenures: InstallmentTenures;
    bundleDeal: null;
    flashSaleStatus: FlashSaleStatus;
    promotionStock: number;
    modifyTime: number;
}

export interface AttributeModel {
    attributes: Attribute[];
    attributeModelID: number;
}

export interface Attribute {
    status: number;
    attributeID: number;
    value: string;
}

export enum FlashSaleStatus {
    Empty = 'empty',
}

export interface InstallmentTenures {
    status: number;
    enables: any[];
}

export interface ModelList {
    sku: string;
    name: string;
    price: string;
    addOnDeal: any[];
    flashSaleStatus: FlashSaleStatus;
    promotionStock: number;
    sold: number;
    priceBeforeDiscount: string;
    inPromotion: boolean;
    id: number;
    stock: number;
}

export interface OngoingUpcomingCampaigns {
    upcomingCampaigns: any[];
    ongoingCampaigns: OngoingCampaign[];
}

export interface OngoingCampaign {
    campaignType: number;
    modelID: number;
    productID: number;
    startTime: number;
    promoSource: number;
    endTime: number;
    price: string;
    stock: number;
}

export interface PageInfo {
    total: number;
    pageNumber: number;
    pageSize: number;
}
