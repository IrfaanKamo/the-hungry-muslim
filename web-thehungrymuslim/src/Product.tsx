import axios from "axios";
import { useEffect, useState } from "react";
import { HalaalProduct } from "./lib/entities/HalaalProduct";

const Product: React.FC = () => {
    const [products, setProducts] = useState<Array<HalaalProduct>>();

    useEffect(() => {
        axios.get('http://localhost:6060/halaalProducts?search_text=juice').then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            {
                products?.map(product => <div key={product.id}>{product.title}</div>)
            }
        </div>
    );
};

export default Product;