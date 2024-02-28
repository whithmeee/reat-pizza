import styles from "./Search.module.scss";
import { IoMdSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Search = ({ search, setSearch }) => {
    return (
        <div className={styles["root"]}>
            <span>
                <IoMdSearch />
            </span>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles["search"]}
                type="text"
                placeholder="Поиск..."
            />

            {search && (
                <span onClick={() => setSearch("")}>
                    <IoCloseOutline className={styles["close"]} />
                </span>
            )}
        </div>
    );
};

export default Search;
