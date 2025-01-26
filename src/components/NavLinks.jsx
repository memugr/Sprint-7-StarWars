import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => (
    <nav className="w-full max-w-screen-xl">
        <ul className="flex justify-center space-x-8 border-b border-gray-800">
            <li>
                <Link
                    to="/"
                    className="inline-block px-4 py-2 text-sm text-gray-400 uppercase hover:text-white border-b-2 border-transparent hover:border-white"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/starships"
                    className="inline-block px-4 py-2 text-sm text-gray-400 uppercase hover:text-white border-b-2 border-transparent hover:border-white"
                >
                    Starships
                </Link>
            </li>
        </ul>
    </nav>
);

export default NavLinks;
