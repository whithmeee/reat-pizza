import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setClearSort } from "../../redux/filterSlice";

interface SORT_ITEM {
    name: string;
    sortType: string;
}

const SORT_ITEMS: SORT_ITEM[] = [
    { name: "популярности", sortType: "rating" },
    { name: "цене", sortType: "price" },
    { name: "алфавиту", sortType: "title" },
];

const Sort = ({ sort, getSortType }) => {
    const sortRef = useRef<HTMLDivElement>(null);
    const [popUp, setPopUp] = useState(false);
    const dispatch = useDispatch();

    const togglePopUp = () => {
        setPopUp(true);
    };

    const getActiveSortItem = (index: SORT_ITEM) => {
        getSortType(index);
        setPopUp(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (!sortRef.current?.contains(target)) {
                setPopUp(false);
            }
        };

        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClearSort = () => {
        dispatch(setClearSort(sort));
        setPopUp(false);
    };

    return (
        <div ref={sortRef} className="sort">
            <div onClick={togglePopUp} className="sort__label">
                <svg
                    className={popUp ? "active" : ""}
                    width="10"
                    height="10"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span>{sort.name}</span>
            </div>

            <div>
                <button onClick={handleClearSort}>сбросить</button>
            </div>

            {popUp && (
                <div className="sort__popup">
                    <ul>
                        {SORT_ITEMS.map((sortType, index) => (
                            <li
                                className={
                                    sortType.name === sort.name ? "active" : ""
                                }
                                onClick={() => getActiveSortItem(sortType)}
                                key={index}
                            >
                                {sortType.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
