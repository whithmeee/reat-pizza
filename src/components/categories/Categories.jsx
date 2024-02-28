import React, { useState } from "react";

const Categories = ({ getSortCategory, CATEGORIES }) => {
    const [categorieActive, setCategorieActive] = useState(0);

    const getCategpriesActive = (index) => {
        setCategorieActive(() => index);
        getSortCategory(index);
    };

    return (
        <div className="categories">
            <ul>
                {CATEGORIES.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => getCategpriesActive(index)}
                        className={categorieActive === index ? "active" : null}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
