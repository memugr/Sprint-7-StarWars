import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-6">
                Oops! Page not found.
            </h1>
            <Link
                to="/"
                className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700"
            >
                Go back home
            </Link>
        </div>
    );
};

export default Error;