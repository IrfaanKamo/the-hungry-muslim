import { RiSearchLine } from 'react-icons/ri';

interface SearchBarProps {
    onChange: (event: any) => void
}

const SearchBar: React.FC<SearchBarProps> = ({onChange}) => {
    return (
        <div className="w-full h-10 pl-3 pr-2 bg-white border-2 border-indigo-300 hover:border-indigo-700 rounded-full flex justify-between items-center relative">
            <input id="search" 
                   placeholder="Search for products..." 
                   className="appearance-none w-full outline-none focus:outline-none active:outline-none"
                   onChange={onChange}
            />
                   
            <button type="submit" className="mr-3">
                <RiSearchLine size={20}/>
            </button>
        </div>
    )
};

export default SearchBar;