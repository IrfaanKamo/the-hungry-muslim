import ProductsViewer from "./components/ProductsViewer";

const App = () => {
    return (
        <div className="container mx-auto bg-gr px-5 sm:px-20 xl:px-48">
            <div className="pt-10 text-center font-medium text-5xl">
                The Hungry Muslim
            </div>
            <ProductsViewer />
        </div>
    );
};

export default App;
