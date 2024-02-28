import React from "react";
import styles from "./Nosearch.module.scss";

const Nosearch = () => {
    return (
        <div className={styles["nosearch"]}>
            <img
                src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
                alt=""
            />

            <h4>Ой, пусто...</h4>

            <p>Такого товара нет, введите другой</p>
        </div>
    );
};

export default Nosearch;
