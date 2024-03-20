import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MyContext } from "./context/useContext";

import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Basket from "./pages/basket/Basket";
import ErrorPage from "./pages/error/ErrorPage";

import "./scss/App.scss";

const App = () => {
    const [search, setSearch] = useState<string | null>("");

    return (
        <div className="wrapper">
            <MyContext.Provider value={{ search, setSearch }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </MyContext.Provider>
        </div>
    );
};

export default App;
