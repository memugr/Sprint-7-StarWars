import React, { useState } from "react";
import useFetchStarships from "../hooks/useFetchStarships";
import { StarshipsContext } from "./StarshipsContext";

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