//import axios from "axios";
import { useEffect, useState } from "react";
import { HalaalProduct } from "../lib/entities/HalaalProduct";

const ProductsViewer: React.FC = () => {
    const [products, setProducts] = useState<Array<HalaalProduct>>([]);

    useEffect(() => {
        // axios.get('http://localhost:6060/halaalProducts?search_text=juice').then((response) => {
        //     setProducts(response.data);
        // });
        setProducts([{id: '12', ingredients: 'ingredients', isHalaal: true, isVegan: false, isVegetarian: true,  title: 'test 1' },
        {id: '13', ingredients: 'ingredients', isHalaal: true, isVegan: false, isVegetarian: true,  title: 'test 2' }]);
    }, []);

    return (
        <div>
            {
                products?.map(product => <div key={product.id}>{product.title}</div>)
            }
        </div>
    );
};

export default ProductsViewer;