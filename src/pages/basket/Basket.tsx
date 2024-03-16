import { Link } from "react-router-dom";
import React from "react";
import Button from "../../components/button/Button";
import "./Basket.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";
import { clearItems } from "../../redux/cartSlice";
import Nosearch from "../../components/nosearch/Nosearch";

const Basket: React.FC = () => {
    const items = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    const dispatch = useDispatch();

    const clearBasketItems = () => {
        dispatch(clearItems(items));
    };

    return items.length > 0 ? (
        <div className="basket">
            <div className="basket_title">
                <h2>Корзина</h2>

                <span style={{ cursor: "pointer" }} onClick={clearBasketItems}>
                    Очистить корзину
                </span>
            </div>

            <div className="basket_item">
                {items.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            {...item}
                            totalPrice={totalPrice}
                        />
                    );
                })}
            </div>

            <div className="basket_total">
                <div className="basket_count">
                    <p>
                        Всего пицц: <span>{totalCount} шт.</span>
                    </p>
                </div>

                <div className="basket_sum">
                    <p>
                        Сумма заказа: <span>{totalPrice} ₽</span>
                    </p>
                </div>
            </div>

            <div className="basket_button">
                <Link to={"/"}>
                    <Button className={["white"]}>Вернуться назад</Button>
                </Link>
                <Button className={["button"]}>Оформить заказ</Button>
            </div>
        </div>
    ) : (
        <Nosearch
            children={
                <div className={"basket-clear"}>
                    <h2>Ой, пусто!.</h2>
                    <p>
                        Ваша корзина пуста, перейдите в «Меню» и выберите
                        понравившийся товар.
                    </p>
                    <Link to={"/"}>
                        <Button children={"Перейти в меню"} />
                    </Link>
                </div>
            }
        />
    );
};

export default Basket;
