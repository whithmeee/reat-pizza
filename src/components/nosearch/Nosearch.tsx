import React from "react";
import styles from "./Nosearch.module.scss";

interface Nosearch {
    children: React.ReactNode;
}

const Nosearch: React.FC<Nosearch> = ({ children }) => {
    return (
        <div className={styles["nosearch"]}>
            <img
                src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
                alt=""
            />
            {children}
        </div>
    );
};

export default Nosearch;
