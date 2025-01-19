import React from "react";

const StarshipItem = ({ name, model }) => {
    return (
        <div className="bg-gray-700 p-2">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-gray-400">{model}</p>
        </div>
    )
}

export default StarshipItem;
