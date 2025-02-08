import React from "react";
import { useNavigate } from "react-router-dom";

//Components
import StarshipItem from "../../components/starship/StarshipItem";
import ViewMoreButton from "../../components/starship/ViewMoreButton";

//Context
import { useStarshipsContext } from "../../context/StarshipsContext";

const Starships = () => {
    const { starships, loading, error } = useStarshipsContext();
    const navigate = useNavigate();

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
            <div className="flex flex-col gap-4 w-fit">
                {starships.map((starship, index) => (
                    <button
                        key={index}
                        className="rounded-sm text-left w-full"
                        onClick={() => navigate(`/starships/${starship.name.toLowerCase()}`)}
                    >
                        <StarshipItem
                            name={starship.name.toUpperCase()}
                            model={starship.model}
                        />
                    </button>
                ))}
                <ViewMoreButton />
            </div>
        </div>
    )
}

export default Starships;