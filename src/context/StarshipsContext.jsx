import React, { createContext, useContext, useState } from "react";
import useFetchStarships from "../hooks/useFetchStarships";

const StarshipsContext = createContext();

export const StarshipsProvider = ({ children }) => {
    const [selectedStarship, setSelectedStarship] = useState(null);
    
    const API_Url = "https://swapi.dev/api/starships/?page=1";
    const { data: starships, loading, error, fetchStarships, next } = useFetchStarships(API_Url);

    return (
        <StarshipsContext.Provider
            value={{
                starships,
                loading,
                error,
                selectedStarship,
                setSelectedStarship,
                fetchStarships,
                next,
            }}
        >
            {children}
        </StarshipsContext.Provider>
    );
};

export const useStarships = () => useContext(StarshipsContext);
