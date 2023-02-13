import { RiSearchLine } from "react-icons/ri";
import classNames from "classnames";

interface SearchBarProps {
    onChange: (event: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
    return (
        <div
            className={classNames(
                "w-full h-10 pl-3",
                "bg-white border-2 border-gray-300 rounded-full",
                "flex justify-between items-center relative",
                "overflow-hidden"
            )}
        >
            <input
                id="search"
                placeholder="Enter product name..."
                className="appearance-none w-full outline-none focus:outline-none active:outline-none"
                onChange={onChange}
            />

            <button
                type="submit"
                className={classNames(
                    "px-6",
                    "text-white bg-green-300 h-10 border-l-1 border-black hover:bg-green-400",
                    "flex justify-center items-center"
                )}
            >
                <RiSearchLine size={17} color="white" />
                <span className="pl-2 font-semibold">Find</span>
            </button>
        </div>
    );
};

export default SearchBar;
