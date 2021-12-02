import * as dotenv from 'dotenv';

class Config {
    public ApiKey: string;
    public SpoonacularFoodUrl: string;
    public SpoonacularNumOfProductsReturned: string;

    constructor(){
        dotenv.config();

        this.ApiKey = process.env.API_KEY || '';
        this.SpoonacularFoodUrl = process.env.SPOONACULAR_FOOD_URL || '';
        this.SpoonacularNumOfProductsReturned = process.env.SPOONACULAR_NUM_OF_PRODUCTS_RETURNED || '1';
    }
}

export const config = new Config();