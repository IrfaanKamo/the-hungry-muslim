
import { Request, Response, NextFunction } from 'express';
import { Badge } from '../lib/spoonacular/enums/Badge';
import { Product } from '../lib/spoonacular/models/Product';
import { searchGroceryProducts } from '../lib/spoonacular/api/groceryProductSearch';
import { HalaalProduct } from '../models/HalaalProduct';
import { DataResponse, ErrorResponse } from '../models/JsonResponse';

const mapToHalaalProduct =  (products: Product[]) : HalaalProduct[] => {
    let halaalProducts: HalaalProduct[] = [];

    products.forEach( product => {
        let halaalProduct: HalaalProduct = new HalaalProduct(product.id, product.title, product.ingredientList);

        product.badges.forEach(badge => {
            switch (badge) {
                case Badge.halaal:
                    halaalProduct.isHalaal = true;
                    break;
                case Badge.vegan:
                    halaalProduct.isVegan = true;
                    break;
                case Badge.vegetarian:
                    halaalProduct.isVegetarian = true;
                    break;
            };
        });

        halaalProducts.push(halaalProduct);
    });

    return halaalProducts;
}

const getHalaalProducts = async (req: Request, res: Response, next: NextFunction) => {
    //url parameters
    const search_text = req.query.search_text as string | '';
    
    if(!search_text) {
        return res.status(400).json(new ErrorResponse('400', 'search_text parameter missing'));
    }

    try {
        let products = await searchGroceryProducts(search_text);
        return res.status(200).json(new DataResponse(mapToHalaalProduct(products)));
    }
    catch{
        return res.status(500).json(new ErrorResponse('500','Failed to load Halaal Products'));
    }
}

export default { getHalaalProducts };