import React, { useState } from "react";

interface CategoriesProps {
    getCuttentCaregory: (index: number) => void;
    CATEGORIES: string[];
}

const Categories: React.FC<CategoriesProps> = ({
    getCuttentCaregory,
    CATEGORIES,
}) => {
    const [categorieActive, setCategorieActive] = useState(0);

    const getCategpriesActive = (index: number) => {
        setCategorieActive(() => index);
        getCuttentCaregory(index);
    };

    return (
        <div className="categories">
            <ul>
                {CATEGORIES.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => getCategpriesActive(index)}
                        className={categorieActive === index ? "active" : ""}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
