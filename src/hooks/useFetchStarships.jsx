import { useState, useEffect, useCallback } from "react";

const useFetchStarships = (initialUrl) => {
    const [data, setData] = useState([]);
    const [next, setNext] = useState(initialUrl);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchStarships = useCallback(async () => {
        if (!next) return;
        setLoading(true);

        try {
            const response = await fetch(next);
            if (!response.ok) {
                throw new Error("Error while fetching the data");
            }
            const result = await response.json();
            setData((prevData) => [...prevData, ...result.results]);
            setNext(result.next);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [next]);

    useEffect(() => {
        if (!data.length) {
            fetchStarships();
        }
    }, [fetchStarships, data.length]);

    return { data, loading, error, fetchStarships, next };
};

export default useFetchStarships;
