import classNames from "classnames";
import { useState } from "react";

const TEXT_MAX_LENGTH = 500;

const ProductIngredients: React.FC<{ ingredients: string }> = ({
    ingredients,
}) => {
    const textTooLong = ingredients.length >= TEXT_MAX_LENGTH;
    const [showMore, setShowMore] = useState(
        ingredients.length > TEXT_MAX_LENGTH
    );

    if(!ingredients) {
        return <>No ingredients supplied.</>
    }

    return (
        <div className="text-sm">
            <span className="whitespace-pre-line">
                {showMore
                    ? `${ingredients
                          .substring(0, TEXT_MAX_LENGTH - 1)
                          .trimEnd()}... `
                    : ingredients}
            </span>
            {textTooLong && (
                <div
                    className={classNames(
                        { "inline-block": showMore },
                        { "pt-2": !showMore },
                        "font-bold hover:text-green-300",
                        "select-none cursor-pointer",
                        "whitespace-nowrap"
                    )}
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "Show more" : "Show less"}
                </div>
            )}
        </div>
    );
};

export default ProductIngredients;
