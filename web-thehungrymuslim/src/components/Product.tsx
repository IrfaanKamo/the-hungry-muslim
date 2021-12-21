import { useState } from "react";
import { HalaalProduct } from "../lib/entities/HalaalProduct";
import ProductMarking, { AlertIcon } from "./ProductMarking";
import { RiInformationFill } from 'react-icons/ri';
import { RiRestaurantFill } from 'react-icons/ri';

export interface ProductProps {
    product: HalaalProduct
}

const Product: React.FC<ProductProps> = ({product}) => {
    const [showIngredients, setShowIngredients] = useState<boolean>(false);

    return (
        <div className="flex-1 border-2 rounded-lg divide-y divide-white mb-2 mx-1 py-3 px-5 bg-indigo-100" >
            
            <div className="text-xl line-clamp-1 font-semibold pb-5">
                {product.title}
            </div>

            <div className="flex justify-between items-center py-2">
                <div className={showIngredients ? "hidden" : undefined}>
                    <ProductMarking 
                        labelStatus={product.isHalaal ? AlertIcon.Safe : AlertIcon.Danger} 
                        labelText={product.isHalaal ? 'Is Halaal Certified' : 'Not Halaal Certified'} 
                    />
                    <ProductMarking 
                        labelStatus={product.isVegetarian ? AlertIcon.Safe : AlertIcon.Warning} 
                        labelText={product.isVegetarian ? 'Is Vegetarian' : 'Not Vegetarian'} 
                    />
                    <ProductMarking 
                        labelStatus={product.isVegan ? AlertIcon.Safe : AlertIcon.Warning} 
                        labelText={product.isVegan ? 'Is Vegan' : 'Not Vegan'} 
                    />
                </div>
                <div className={showIngredients ? 'text-justify' : "hidden"}>
                    {product.ingredients || 'No ingredients supplied.'}
                </div>
                <div className="flex flex-col justify-center pl-4">
                    <div title="Markings" className={`border-l-2 border-b-2 rounded-lg p-3 border-black select-none ${showIngredients ? 'cursor-pointer' : 'bg-gray-100'}`} onClick={() => setShowIngredients(false)}>
                        <RiInformationFill />
                    </div>
                    <div title="Ingredients" className={`border-l-2 border-t-2 rounded-lg border-black p-3 select-none ${showIngredients ? 'bg-gray-100' : 'cursor-pointer'}`} onClick={() => setShowIngredients(true)}>
                        <RiRestaurantFill />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;