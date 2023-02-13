import { useState } from "react";
import { HalaalProduct } from "../lib/entities/HalaalProduct";
import ProductMarking, { AlertIcon } from "./ProductMarking";
import { RiInformationFill } from "react-icons/ri";
import { RiRestaurantFill } from "react-icons/ri";
import ProductIngredients from "./ProductIngredients";

export interface ProductProps {
    product: HalaalProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const [showIngredients, setShowIngredients] = useState<boolean>(false);
    console.log('image:', product.imageUrl);
    return (
        <div className="flex-1 border-2 rounded-lg divide-y divide-white mb-2 mx-1 py-3 px-5 bg-indigo-100">
            <div className="text-xl font-semibold pb-5">{product.title}</div>

            <div className="flex justify-between items-center py-2">
                <div className={showIngredients ? "hidden" : "flex justify-start items-center"}>
                    <div className="w-20 h-20">
                        <img src={product.imageUrl} loading="lazy" />
                    </div>
                    <div className="mx-10">
                        <ProductMarking
                            labelStatus={
                                product.isHalaal
                                    ? AlertIcon.Safe
                                    : AlertIcon.Danger
                            }
                            labelText={
                                product.isHalaal
                                    ? "Halaal certified"
                                    : "No Halaal certification found"
                            }
                        />
                        <ProductMarking
                            labelStatus={
                                product.isVegetarian
                                    ? AlertIcon.Safe
                                    : AlertIcon.Warning
                            }
                            labelText={
                                product.isVegetarian
                                    ? "Suitable for Vegetarian"
                                    : "Not suitable for Vegetarian"
                            }
                        />
                        <ProductMarking
                            labelStatus={
                                product.isVegan
                                    ? AlertIcon.Safe
                                    : AlertIcon.Warning
                            }
                            labelText={
                                product.isVegan
                                    ? "Suitable for Vegan"
                                    : "Not suitable for Vegan"
                            }
                        />
                    </div>
                </div>
                <div className={showIngredients ? "text-justify" : "hidden"}>
                    <ProductIngredients ingredients={product.ingredients} />
                </div>
                <div className="flex flex-col justify-center pl-4">
                    <div
                        title="Markings"
                        className={`flex items-center border-l-2 border-b-2 rounded-lg p-3 border-black select-none ${
                            showIngredients ? "cursor-pointer" : "bg-gray-100"
                        }`}
                        onClick={() => setShowIngredients(false)}
                    >
                        <RiInformationFill />
                        <span className="pl-2">Markings</span>
                    </div>
                    <div
                        title="Ingredients"
                        className={`flex items-center border-l-2 border-t-2 rounded-lg border-black p-3 select-none ${
                            showIngredients ? "bg-gray-100" : "cursor-pointer"
                        }`}
                        onClick={() => setShowIngredients(true)}
                    >
                        <RiRestaurantFill />
                        <span className="pl-2">Ingredients</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
