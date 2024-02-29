import React, { useEffect, useState } from "react";
import axios from "axios";

import Categories from "../../components/categories/Categories";
import Sort from "../../components/sort/Sort";
import Cart from "../../components/cart/Cart";
import MyLoader from "../../components/loader/Loader";
import Nosearch from "../../components/nosearch/Nosearch";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSortType } from "../../redux/filterSlice";

const CATEGORIES = ["Все", "Пиццы", "Завтрак", "Комбо", "Закуски", "Напитки"];

const Main = ({ search }) => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const categoryActive = useSelector((state) => state.filter.category);
    const sort = useSelector((state) => state.filter.sortType);
    const dispatch = useDispatch();

    console.log(sort);
    const getAllPizzas = async () => {
        setIsLoading(true);
        try {
            let url = `https://7d7cc53e3b90fa42.mokky.dev/allItems?page=${currentPage}&limit=8&sortBy=${sort.sortType}&title=*${search}`;
            if (categoryActive && categoryActive !== 0) {
                url += `&category=${categoryActive}`;
            }
            const { data } = await axios.get(url);

            setItems(data.items);
            setIsLoading(false);
            window.scrollTo(0, 0);
        } catch (error) {
            console.log(error);
        }
    };

    const getSortType = (index) => {
        dispatch(setSortType(index));
    };

    const onChangePage = (number) => {
        setCurrentPage(number);
    };

    const getCuttentCaregory = (index) => {
        dispatch(setCategoryId(index));
    };

    useEffect(() => {
        getAllPizzas();
    }, [categoryActive, sort, search, currentPage]);

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories
                        getCuttentCaregory={getCuttentCaregory}
                        CATEGORIES={CATEGORIES}
                    />
                    <Sort getSortType={getSortType} sort={sort} />
                </div>
                <h2 className="content__title">
                    {items.length > 0 ? CATEGORIES[categoryActive] : null}
                </h2>
                <div className="content__items">
                    {isLoading
                        ? [...new Array(4)].map((_, index) => {
                              return <MyLoader key={index} />;
                          })
                        : null}
                    {!isLoading && items.length > 0
                        ? items.map((item) => {
                              return <Cart key={item.id} {...item} />;
                          })
                        : undefined}
                </div>
                {items.length === 0 ? <Nosearch /> : null}
                {items.length === 0 ? null : (
                    <Pagination onChangePage={onChangePage} />
                )}
            </div>
        </div>
    );
};

export default Main;
