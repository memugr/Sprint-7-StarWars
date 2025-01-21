import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-6">
                Welcome to the Star Wars Universe!
            </h1>
            <Link
                to="/starships"
                className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700"
            >
                travel
            </Link>
        </div>
    );
};

export default Home;
