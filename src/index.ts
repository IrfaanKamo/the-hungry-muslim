
import { Badge } from './spoonacular/enums/Badge';
import { Product } from './spoonacular/models/Product';
import { searchGroceryProducts } from './spoonacular/api/groceryProductSearch';
import { HalaalProduct } from './models/HalaalProduct';

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

searchGroceryProducts('pringles')
    .then( products => console.log(mapToHalaalProduct(products)));
