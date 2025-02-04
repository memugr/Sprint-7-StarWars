import { useState } from 'react';
import { AppContext } from "../context/AppContext";

export function AppProvider({ children }) {
    const [state, setState] = useState({
        user: null,
        isAuthenticated: false,
        email: '',
        isLoading: false,
    });

    const value = {
        state,
        setState,
        login: (user) => {
            setState((prevState) => ({
                ...prevState,
                user,
                isAuthenticated: true,
            }));
        },

        logout: () => {
            setState((prevState) => ({
                ...prevState,
                user: null,
                isAuthenticated: false,
            }));
        },

        setEmail: (email) => {
            setState((prevState) => ({
                ...prevState,
                email,
            }));
        },
        
        setLoading: (isLoading) => {
            setState((prevState) => ({
                ...prevState,
                isLoading,
            }));
        },
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}