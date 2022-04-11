import axios from "axios";
import { useState } from "react";
import { HalaalProduct } from "../lib/entities/HalaalProduct";
import SearchBar from "./SearchBar";
import Product from "./Product";
import Error from "./Error";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const ProductsViewer: React.FC = () => {
    const [products, setProducts] = useState<Array<HalaalProduct>>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');

    console.log('rendered');

    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        // prevent search if no text is provided
        if(searchTerm.trim() === '') {
            return;
        }

        // reset states
        setErrorMessage('');
        setLoading(true);
        setProducts([]);

        // call api to get results based on search criteria
        axios.get(`http://localhost:6060/halaalProducts`, {
                params: {
                    search_text: searchTerm
                }
            })
            .then((response) => {
                if(response.data.error) {
                    setErrorMessage('Error: Could not retrieve results for your search. Please try again later.');
                    console.log('API Error: ', response.data.error.message);
                }
                else {
                    setProducts(response.data.data);
                }
                setLoading(false);
            })
            .catch((error) => {
                setErrorMessage('Error: Could not retrieve results for your search. Please try again later.');
                console.log(error);
                setLoading(false);
            });
    }

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit}>
                <SearchBar onChange={handleChange} />
            </form>
            <div className="flex-row justify-around pt-5">
                    { 
                        loading && <Skeleton count={3} height={200}/>
                    }
                    { 
                        errorMessage && <Error message={errorMessage} />
                    }
                    { 
                        products && products.map(product => <Product key={product.id} product={product}/>) 
                    }
            </div>
        </div>
    );
};

export default ProductsViewer;