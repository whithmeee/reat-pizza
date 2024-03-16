import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface Button {
    children: React.ReactNode;
    className?: string[];
}

const Button: React.FC<Button> = ({ children, className }) => {
    return (
        <button
            className={cn(
                styles.button,
                ...(className ? className.map((name) => styles[name]) : [])
            )}
        >
            {children}
        </button>
    );
};

export default Button;
