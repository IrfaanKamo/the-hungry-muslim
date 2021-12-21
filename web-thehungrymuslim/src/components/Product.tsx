import { useState } from "react";
import { HalaalProduct } from "../lib/entities/HalaalProduct";
import ProductMarking, { AlertIcon } from "./ProductMarking";

export interface ProductProps {
    product: HalaalProduct
}

const Product: React.FC<ProductProps> = ({product}) => {
    const [showIngredients, setShowIngredients] = useState<boolean>(false);
    
    const toggleIngredients = () => {
        setShowIngredients(!showIngredients);
    }

    return (
        <div className="flex-1 border-2 rounded-lg mb-2 mx-1 p-3" >
            
            <div className="text-xl font-semibold pb-5">{product.title}</div>

            <div className={`w-24 h-6 flex items-center rounded-full p-1 ${showIngredients ? 'justify-start bg-green-200' : 'justify-end bg-yellow-200'}`} onClick={toggleIngredients}>
                {
                    showIngredients ? <></> : (<div className="text-xs select-none font-semibold">Markings</div>)
                }
                <div className="bg-white w-4 h-4 rounded-full shadow-md mx-1"></div>
                {
                    showIngredients ? (<div className="text-xs select-none font-semibold">Ingredients</div>) : <></>
                }
            </div>

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

        </div>
    )
}

export default Product;