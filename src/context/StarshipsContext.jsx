import React, { createContext, useContext, useState } from "react";
import useFetchStarships from "../hooks/useFetchStarships";

const StarshipsContext = createContext();

export const StarshipsProvider = ({ children }) => {
    const [selectedStarship, setSelectedStarship] = useState(null);
    
    const API_Url = 'https://swapi.py4e.com/api/starships/'
    const { data: starships, loading, error } = useFetchStarships(API_Url);

    return (
        <StarshipsContext.Provider
            value={{
                starships,
                loading,
                error,
                selectedStarship,
                setSelectedStarship,
            }}
        >
            {children}
        </StarshipsContext.Provider>
    );
};

export const useStarships = () => useContext(StarshipsContext);

