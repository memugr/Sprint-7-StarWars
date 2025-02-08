import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStarshipsContext } from "../../context/StarshipsContext";
import StarshipDetails from "../../components/starship/StarshipDetails";

const StarshipDetailsPage = () => {
    const { name } = useParams();
    const { starships } = useStarshipsContext();
    const navigate = useNavigate();
    const starship = starships.find(s => s.name.toLowerCase() === name);

    if (!starship) {
        return (
            <div className="flex items-center justify-center h-screen text-red-500">
                <p>Starship not found.</p>
            </div>
        );
    }

    return (
        <StarshipDetails
            starship={starship}
            onBack={() => navigate('/starships')}
        />
    );
};

export default StarshipDetailsPage;