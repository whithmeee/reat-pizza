import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import "./ErrorPage.scss";

const ErrorPage = () => {
    return (
        <div className="error">
            <h2>...Oops! Такой страницы нет.</h2>
            <img
                style={{ width: "350px", height: "350px" }}
                src="../../404.png"
                alt="#"
            />
            <Link to={"/"}>
                <Button children={"Вернуться на главную"} />
            </Link>
        </div>
    );
};

export default ErrorPage;
