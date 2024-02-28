import React, { useEffect, useState } from "react";
import axios from "axios";

import Categories from "../../components/categories/Categories";
import Sort from "../../components/sort/Sort";
import Cart from "../../components/cart/Cart";
import MyLoader from "../../components/loader/Loader";
import Nosearch from "../../components/nosearch/Nosearch";
import Pagination from "../../components/pagination/Pagination";

const CATEGORIES = ["Все", "Пиццы", "Завтрак", "Комбо", "Закуски", "Напитки"];

const Main = ({ search }) => {
    const [items, setItems] = useState([]);
    const [sortByCategory, setSortByCategory] = useState(0);
    const [sortType, setSortType] = useState({
        name: "попопулярности",
        sortType: "rating",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const getAllPizzas = async () => {
        setIsLoading(true);
        try {
            let url = `https://7d7cc53e3b90fa42.mokky.dev/allItems?page=${currentPage}&limit=8&sortBy=${sortType.sortType}&title=*${search}`;
            if (sortByCategory && sortByCategory !== 0) {
                url += `&category=${sortByCategory}`;
            }
            const { data } = await axios.get(url);
            console.log(data.items);
            setItems(data.items);
            setIsLoading(false);
            window.scrollTo(0, 0);
        } catch (error) {
            console.log(error);
        }
    };

    const getSortCategory = (index) => {
        setSortByCategory(index);
    };

    const getSortPrice = (index) => {
        setSortType(index);
    };

    const onChangePage = (number) => {
        setCurrentPage(number);
    };

    useEffect(() => {
        getAllPizzas();
    }, [sortByCategory, sortType, search, currentPage]);

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories
                        CATEGORIES={CATEGORIES}
                        getSortCategory={getSortCategory}
                    />
                    <Sort
                        getSortPrice={getSortPrice}
                        setSortType={setSortType}
                        sortType={sortType}
                    />
                </div>
                <h2 className="content__title">
                    {items.length > 0 ? CATEGORIES[sortByCategory] : null}
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
