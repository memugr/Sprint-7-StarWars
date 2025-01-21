import React from "react";

//Components
import StarshipItem from "../../components/StarshipItem";
import StarshipDetails from "../../components/StarshipDetails";
import ViewMoreButton from "../../components/ViewMoreButton";

//Context
import { useStarshipsContext } from "../../context/StarshipsContext";

const Starships = () => {
    const { starships, selectedStarship, setSelectedStarship, loading, error } = useStarshipsContext();

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
                    <StarshipDetails
                        starship={selectedStarship}
                        onBack={() => setSelectedStarship(null)}
                    />
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

                    <ViewMoreButton />
                </div>
            )}
        </div>
    )
}

export default Starships;