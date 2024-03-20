import { createContext } from "react";

export interface MyContextType {
    search: string | null;
    setSearch: React.Dispatch<React.SetStateAction<string | null>>;
}

export const MyContext = createContext<MyContextType>({
    search: null,
    setSearch: () => {},
});
