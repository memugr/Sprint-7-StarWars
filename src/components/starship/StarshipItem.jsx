import React from "react";

const StarshipItem = ({ name, model }) => {
    return (
        <div className="starship-box rounded-sm p-2 w-[700px] mx-auto">
            <h2 className="text-base mb-2">{name}</h2>
            <p>{model}</p>
        </div>
    )
}

export default StarshipItem;
