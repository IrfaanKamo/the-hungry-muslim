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

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        // get the search box query string
        event.preventDefault();
        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
          search: {value: string} //id of the SearchBar's input box
        }

        // prevent search if no text is provided
        if(formElements.search.value.trim() === '') {
            return;
        }

        // reset states
        setErrorMessage('');
        setLoading(true);
        setProducts([]);

        // call api to get results based on search criteria
        axios.get(`http://localhost:6060/halaalProducts?search_text=${formElements.search.value}`)
            .then((response) => {
                setProducts(response.data);
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
                <SearchBar />
            </form>
            <div className="flex-row justify-around pt-5">
                    { 
                        loading && <Skeleton count={3} height={200}/>
                    }
                    { 
                        errorMessage && <Error message={errorMessage} />
                    }
                    { 
                        products && products.map(product => <Product product={product}/>) 
                    }
            </div>
        </div>
    );
};

export default ProductsViewer;