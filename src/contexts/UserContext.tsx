import { createContext } from "react";

// Context
const UserContext = createContext({});

// Provider
export default function UserContextProvider({children} : any) {
    const contextValue = {nome: 'erick'}

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}