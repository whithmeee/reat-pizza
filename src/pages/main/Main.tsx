import React, { useContext, useEffect } from "react";
import qs from "qs";

import { useNavigate } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import Sort from "../../components/sort/Sort";
import Cart from "../../components/cart/Cart";
import MyLoader from "../../components/loader/Loader";
import Nosearch from "../../components/nosearch/Nosearch";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSortType } from "../../redux/filterSlice";
import { setPage } from "../../redux/paginateSlice";
import { MyContext } from "../../context/useContext";
import { fetchPizza } from "../../redux/pizzaSlice";

const CATEGORIES = ["Все", "Пиццы", "Завтрак", "Комбо", "Закуски", "Напитки"];

const Main = () => {
    const { search } = useContext(MyContext);
    const { items, status } = useSelector((state) => state.pizza);
    const categoryActive = useSelector((state) => state.filter.category);
    const sort = useSelector((state) => state.filter.sortType);
    const page = useSelector((state) => state.page.page);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getAllPizzas = async () => {
        dispatch(
            // @ts-ignore
            fetchPizza({
                page,
                sort,
                categoryActive,
                search,
            })
        );

        window.scrollTo(0, 0);
    };

    const getSortType = (index: number) => {
        dispatch(setSortType(index));
    };

    const onChangePage = (number: number) => {
        dispatch(setPage(number));
    };

    const getCuttentCaregory = (index: number) => {
        dispatch(setCategoryId(index));
    };

    useEffect(() => {
        getAllPizzas();
    }, [categoryActive, sort, search, page]);

    useEffect(() => {
        const queryString = qs.stringify({
            sortType: sort.sortType,
            categoryActive: categoryActive,
            page: page,
        });

        navigate(`?${queryString}`);
    }, [categoryActive, sort, search, page]);

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
                    {status === "loading"
                        ? [...new Array(4)].map((_, index) => {
                              return <MyLoader key={index} />;
                          })
                        : null}
                    {status === "success" && items.length > 0
                        ? items.map((item) => {
                              return <Cart key={item.id} {...item} />;
                          })
                        : undefined}
                </div>
                {status === "error" && items.length === 0 ? (
                    <Nosearch
                        children={
                            <div className="content-search">
                                <h2>Ой, ошибка при получение товаров!.</h2>

                                <p>Попробуйте позднее...</p>
                            </div>
                        }
                    />
                ) : null}

                {categoryActive === 0 || categoryActive === 1 ? (
                    <Pagination items={items} onChangePage={onChangePage} />
                ) : null}
            </div>
        </div>
    );
};

export default Main;
