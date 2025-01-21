import { AppContext } from "../context/AppContext";

export function AppProvider({ children }) {
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}