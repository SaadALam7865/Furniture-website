

export interface Product  {
    _id: string;
    title: string;
    _type: "product";
    imageUrl: string;
    price: number;
    description: string;
    isNew: boolean;
    tags: string[];
    dicountPercentage:number;
    quantity: number;
    stock: number;
    
}