import axios from "axios";
import { config } from "../../../config";
import { Product, ProductResponse } from "../models/Product";

export async function searchGroceryProducts(searchString?: string): Promise<Product[]> {
    try {
        const response = await axios.get(
            `${config.SpoonacularFoodUrl}/products/search`,
            {
                params: {
                    apiKey: config.ApiKey,
                    addProductInformation: true,
                    number: config.SpoonacularNumOfProductsReturned,
                    query: searchString || ''
                }
            });
            
        const productResponse = response.data as ProductResponse;
        return productResponse.products;
    }
    catch(error) {
        console.error('Failed to get Grocery Products with error: ', error);
        throw error;
    }
}