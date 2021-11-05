import axios from "axios";
import { config } from "../../config";
import { Product, ProductResponse } from "../models/Product";

let groceryProductSearchUrl = `${config.SpoonacularFoodUrl}/products/search?apiKey=${config.ApiKey}&addProductInformation=true&number=${config.SpoonacularNumOfProductsReturned}`;

export async function searchGroceryProducts(searchString?: string): Promise<Product[]> {
    if(searchString){
        groceryProductSearchUrl = groceryProductSearchUrl.concat(`&query=${searchString}`);
    }

    try {
        const response = await axios.get(groceryProductSearchUrl);
        const productResponse = response.data as ProductResponse;
        return productResponse.products;
    }
    catch(error) {
        console.error('Failed to get Grocery Products with error: ', error);
        return [];
    }
}