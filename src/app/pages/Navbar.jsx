import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import starWarsLogo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar fixed top-0 left-0 w-screen z-50">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
                {/* Social Media Links */}
                <div className="flex items-center space-x-4">
                    <a href="#facebook" className="hover:text-white">
                        <Facebook size={16} />
                    </a>
                    <a href="#instagram" className="hover:text-white">
                        <Instagram size={16} />
                    </a>
                    <a href="#twitter" className="hover:text-white">
                        <Twitter size={16} />
                    </a>
                    <a href="#youtube" className="hover:text-white">
                        <Youtube size={16} />
                    </a>
                </div>

                {/* Authentication Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="text-sm hover:text-white uppercase">Register</button>
                    <button className="text-sm hover:text-white uppercase">Log In</button>
                </div>
            </div>

            {/* Main Navigation */}
            <header className="flex flex-col items-center px-6 py-4">
                {/* Logo */}
                <div className="mb-4">
                    <Link to="/">
                        <img
                            src={starWarsLogo}
                            alt="Star Wars Logo"
                            className="h-16"
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
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
            </header>
        </div>
    );
};

export default Navbar;
