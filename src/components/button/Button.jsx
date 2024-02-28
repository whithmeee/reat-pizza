import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({ children, className }) => {
    return (
        <button
            className={cn(
                styles.button,
                ...className.map((name) => styles[name])
            )}
        >
            {children}
        </button>
    );
};

export default Button;
