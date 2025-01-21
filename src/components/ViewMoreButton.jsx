import React from "react";
import { useStarshipsContext } from "../context/StarshipsContext"; // Update this import path

const ViewMoreButton = () => {
    const { fetchStarships, loading, next } = useStarshipsContext(); // Use the hook instead of StarshipsProvider
    if (!next) return null;
    
    return (
        <div className="flex justify-center mt-6">
            <button 
                className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700"
                onClick={fetchStarships}
                disabled={loading}
                >
                view more
            </button>
        </div>
    )
}

export default ViewMoreButton;