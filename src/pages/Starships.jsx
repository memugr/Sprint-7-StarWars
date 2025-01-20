import { useState, useEffect } from "react";
import StarshipItem from '../components/StarshipItem'

const Starships = () => {
    const [starships, setStarships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the data from the API
        const fetchStarships = async () => {
            try {
                const url = 'https://swapi.py4e.com/api/starships/'
                const response = await fetch(url);
                if (!response.ok) {
                    throw Error('Error while fetching the data');
                }
                const data = await response.json();
                setStarships(data.results);
                setLoading(false)
            } catch (error) {
                setError(error.message);
                console.error(error);
                setLoading(false)
            }
        };

        fetchStarships();
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-white">
                <p>Loading starships...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen text-red-500">
                <p>{error}</p>
            </div>
        );
    }

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