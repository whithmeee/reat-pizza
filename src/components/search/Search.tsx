import React from "react";
import { useContext, useRef } from "react";
import styles from "./Search.module.scss";
import { IoMdSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MyContext } from "../../context/useContext";

const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { search, setSearch } = useContext(MyContext);

    const handleResetSearch = () => {
        setSearch("");
        inputRef.current?.focus();
    };

    const handleChangeValue = (event: any) => {
        setSearch(event.target.value);
    };
    return (
        <div className={styles["root"]}>
            <span>
                <IoMdSearch />
            </span>
            <input
                ref={inputRef}
                value={search}
                onChange={handleChangeValue}
                className={styles["search"]}
                type="text"
                placeholder="Поиск..."
            />

            {search && (
                <span onClick={handleResetSearch}>
                    <IoCloseOutline className={styles["close"]} />
                </span>
            )}
        </div>
    );
};

export default Search;
