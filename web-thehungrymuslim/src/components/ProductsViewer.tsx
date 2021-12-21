import axios from "axios";
import { useEffect, useState } from "react";
import { HalaalProduct } from "../lib/entities/HalaalProduct";
import Product from "./Product";
import { RiSearchLine } from 'react-icons/ri';

const ProductsViewer: React.FC = () => {
    const [products, setProducts] = useState<Array<HalaalProduct>>([]);

    useEffect(() => {
        // axios.get('http://localhost:6060/halaalProducts?search_text=juice').then((response) => {
        //     setProducts(response.data);
        // });
        setProducts([{id: '12', ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', isHalaal: true, isVegan: false, isVegetarian: true,  title: 'Pringles: Lightly Salted' },
        {id: '13', ingredients: 'ingredients', isHalaal: false, isVegan: false, isVegetarian: true,  title: 'Pringles: Sweet Chilli' },
        {id: '13', ingredients: '', isHalaal: true, isVegan: true, isVegetarian: true,  title: 'Pringles: The Great American BBQ Flavour' }]);
    }, []);

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
          search: {value: string}
        }
        
        axios.get(`http://localhost:6060/halaalProducts?search_text=${formElements.search.value}`).then((response) => {
            setProducts(response.data);
        });
    }

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit}>
                <div className="w-full h-10 pl-3 pr-2 bg-white border-2 border-indigo-300 hover:border-indigo-700 rounded-full flex justify-between items-center relative">
                    <input type="search" 
                            name="search" 
                            id="search" 
                            placeholder="Search for products..." 
                            className="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
                    <button type="submit" className="mr-3">
                        <RiSearchLine size={20}/>
                    </button>
                </div>
            </form>

            <div className="flex-row justify-around pt-5">
                {
                    products?.map(product => <Product product={product}/>)
                }
            </div>
        </div>

    );
};

export default ProductsViewer;