import { Badge } from "../enums/Badge";

export interface Product {
    id: string;
    title: string;
    badges: Badge[];
    aisle: string;
    description: string;
    image: string;
    ingredientList: string;
}

export interface ProductResponse {
    products: Product[];
    totalProducts: string;
}