//import axios from "axios";
import { useEffect, useState } from "react";
import { HalaalProduct } from "../lib/entities/HalaalProduct";
import Product from "./Product";

const ProductsViewer: React.FC = () => {
    const [products, setProducts] = useState<Array<HalaalProduct>>([]);

    useEffect(() => {
        // axios.get('http://localhost:6060/halaalProducts?search_text=juice').then((response) => {
        //     setProducts(response.data);
        // });
        setProducts([{id: '12', ingredients: 'ingredients', isHalaal: true, isVegan: false, isVegetarian: true,  title: 'Pringles: Lightly Salted' },
        {id: '13', ingredients: 'ingredients', isHalaal: false, isVegan: false, isVegetarian: true,  title: 'Pringles: Sweet Chilli' },
        {id: '13', ingredients: 'ingredients', isHalaal: true, isVegan: true, isVegetarian: true,  title: 'Pringles: The Great American BBQ Flavour' }]);
    }, []);

    return (
        <div className="my-10">
            <div className="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
                <input type="search" name="search" id="search" placeholder="Search for products..."
                        className="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
                <button type="submit" className="ml-1 outline-none focus:outline-none active:outline-none">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
            <div className="pt-10 flex justify-around">
                {
                    products?.map(product => <Product product={product}/>)
                }
            </div>
        </div>

    );
};

export default ProductsViewer;