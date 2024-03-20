import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, addItems } from "../../redux/cartSlice";

interface CartProps {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    description: string;
    category: number;
}

const typeNames = ["тоннкое", "традиционное"];
const sizeTypes = [26, 30, 40];

const Cart: React.FC<CartProps> = ({ ...item }) => {
    const [activeSize, setActiveSize] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const cartItem = useSelector((state) =>
        state.cart.items.find((obj) => obj.id === item.id)
    );
    const dispatch = useDispatch();

    const handleAddItem = () => {
        const itemCart: CartItem = {
            id: item.id,
            name: item.title,
            price: item.price,
            imageUrl: item.imageUrl,
            sizes: sizeTypes[activeSize],
            types: typeNames[activeType],
            count: 0,
        };
        dispatch(addItems(itemCart));
    };

    const currentItemCount = cartItem ? cartItem.count : 0;

    const getActiveSize = (index: number) => {
        setActiveSize(index);
    };

    const getActiveType = (index: number) => {
        setActiveType(index);
    };
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={item.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{item.title}</h4>
            {item.types !== undefined ? (
                <div key={item.id} className="pizza-block__selector">
                    <ul>
                        {" "}
                        {item.types !== undefined ? (
                            item.types.map((type, index) => (
                                <li
                                    key={index}
                                    className={
                                        activeType === index ? "active" : ""
                                    }
                                    onClick={() => getActiveType(index)}
                                >
                                    {type}
                                </li>
                            ))
                        ) : (
                            <div></div>
                        )}
                    </ul>
                    <ul>
                        {item.sizes?.map((size, index) => {
                            return (
                                <li
                                    className={
                                        activeSize === index ? "active" : ""
                                    }
                                    onClick={() => getActiveSize(index)}
                                    key={index}
                                >
                                    {size} см.
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : // <div style={{ height: "60px" }}></div>
            null}

            <div className="pizza-block__desc">
                <p>{item.description}</p>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">
                    {`${item.category === 1 ? `от ${item.price}` : item.price}`}
                    ₽
                </div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span onClick={handleAddItem}>Добавить</span>
                    {currentItemCount > 0 && <i>{currentItemCount}</i>}
                </div>
            </div>
        </div>
    );
};

export default Cart;
