import { useState } from "react";
import { HalaalProduct } from "../lib/entities/HalaalProduct";
import ProductMarking, { AlertIcon } from "./ProductMarking";

export interface ProductProps {
    product: HalaalProduct
}

const Product: React.FC<ProductProps> = ({product}) => {
    const [showIngredients, setShowIngredients] = useState<boolean>(false);
    
    const toggleIngredients = (show: boolean) => {
        setShowIngredients(show);
    }

    return (
        <div className="flex-1 border-2 rounded-lg divide-y mb-2 mx-1 p-3" >
            
            <div className="text-xl font-semibold pb-5">{product.title}</div>

            <div className="flex justify-between">
                <div className={showIngredients ? "hidden" : undefined}>
                    <ProductMarking 
                        labelStatus={product.isHalaal ? AlertIcon.Safe : AlertIcon.Danger} 
                        labelText={product.isHalaal ? 'Is Halaal' : 'Not Halaal'} 
                    />
                    <ProductMarking 
                        labelStatus={product.isVegan ? AlertIcon.Safe : AlertIcon.Warning} 
                        labelText={product.isVegan ? 'Is Vegan' : 'Not Vegan'} 
                    />
                    <ProductMarking 
                        labelStatus={product.isVegetarian ? AlertIcon.Safe : AlertIcon.Warning} 
                        labelText={product.isVegetarian ? 'Is Vegetarian' : 'Not Vegetarian'} 
                    />
                </div>
                <div className={showIngredients ? undefined : "hidden"}>
                    {product.ingredients}
                </div>
                <div className="flex flex-col justify-center">
                    <div className={`border-l-2 border-b-2 pl-1 select-none ${showIngredients ? 'bg-gray-200' : 'cursor-pointer'}`} onClick={() => toggleIngredients(true)}>I</div>
                    <div className={`border-l-2 border-b-2 pl-1 select-none ${showIngredients ? 'cursor-pointer' : 'bg-gray-200'}`} onClick={() => toggleIngredients(false)}>M</div>
                </div>
            </div>

        </div>
    )
}

export default Product;