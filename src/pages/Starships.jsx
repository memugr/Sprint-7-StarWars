import React from "react";
import StarshipItem from "../components/StarshipItem";
import useFetchStarships from "../hooks/useFetchStarships";

const Starships = () => {
    const { data: starships, loading, error } = useFetchStarships("https://swapi.py4e.com/api/starships/");

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-white">
                <p>Loading starships...</p>
            </div>
        )
    };

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen text-red-500">
                <p>{error}</p>
            </div>
        )
    };

    return (
        <div className="flex flex-col gap-4 w-fit">
            {starships.map((starship, index) => (
                <StarshipItem
                    key={index}
                    name={starship.name.toUpperCase()}
                    model={starship.model}
                />
            ))}
        </div>
    )
}

export default Starships