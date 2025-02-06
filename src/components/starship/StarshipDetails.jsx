import React from "react";

const StarshipDetails = ({ starship, onBack }) => {
    return (
        <div className="starship-details p-4 rounded-sm w-[800px] mx-auto">
            <h2 className="text-2xl mb-4">{starship.name.toUpperCase()}</h2>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac orci nec erat accumsan suscipit.
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <p><strong>Model:</strong> {starship.model}</p>
                <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
                <p><strong>Cost in credits:</strong> {starship.cost_in_credits}</p>
                <p><strong>Length:</strong> {starship.length} meters</p>
                <p><strong>Atmospheric Speed:</strong> {starship.max_atmosphering_speed}</p>
                <p><strong>Crew:</strong> {starship.crew}</p>
                <p><strong>Passengers:</strong> {starship.passengers}</p>
                <p><strong>Starship Class:</strong> {starship.starship_class}</p>
            </div>

            <div className="flex justify-center mt-6">
                <button
                    className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700"
                    onClick={onBack}
                >
                    Back to List
                </button>
            </div>
        </div>
    );
};

export default StarshipDetails;

