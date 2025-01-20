import React, { useState } from "react";
import StarshipItem from "../components/StarshipItem";
import useStarshipsList from "../hooks/useStarshipsList";
import StarshipDetails from "../components/StarshipDetails";

const Starships = () => {
    const API_Url = 'https://swapi.py4e.com/api/starships/'
    const { data: starships, loading, error } = useStarshipsList(API_Url);
    const [selectedStarship, setSelectedStarship] = useState(null)

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
        <div className="p-2">
            {selectedStarship ? (
                <div>
                    <StarshipDetails starship={selectedStarship} onBack={() => setSelectedStarship(null)} />
                </div>
            ) : (
                <div className="flex flex-col gap-4 w-fit">
                    {starships.map((starship, index) => (
                        <button
                            key={index}
                            className="rounded-sm text-left w-full"
                            onClick={() => setSelectedStarship(starship)}
                        >
                            <StarshipItem
                                name={starship.name.toUpperCase()}
                                model={starship.model}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Starships