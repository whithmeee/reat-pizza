import React, { useState } from "react";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Basket from "./pages/basket/Basket";
import ErrorPage from "./pages/error/ErrorPage";

import { Routes, Route } from "react-router-dom";

import "./scss/App.scss";

const App = () => {
    const [search, setSearch] = useState("");

    return (
        <div class="wrapper">
            <Header search={search} setSearch={setSearch} />
            <Routes>
                <Route path="/" element={<Main search={search} />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
};

export default App;
