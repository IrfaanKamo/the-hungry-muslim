
import { Request, Response, NextFunction } from 'express';
import { Badge } from '../lib/spoonacular/enums/Badge';
import { Product } from '../lib/spoonacular/models/Product';
import { searchGroceryProducts } from '../lib/spoonacular/api/groceryProductSearch';
import { HalaalProduct } from '../models/HalaalProduct';

const mapToHalaalProduct =  (products: Product[]) : HalaalProduct[] => {
    let halaalProducts: HalaalProduct[] = [];

    products.forEach( product => {
        let halaalProduct: HalaalProduct = new HalaalProduct(product.title, product.ingredientList);

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
    let products = await searchGroceryProducts('pringles');
    return res.status(200).json({
        halaalProducts: mapToHalaalProduct(products)
    })
}

export default { getHalaalProducts };