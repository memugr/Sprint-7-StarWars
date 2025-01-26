import React from "react";
import { useAuth } from "../context/AuthContext";

const AuthButtons = ({ onRegisterOpen, onLoginOpen }) => {
    const { user, logOut } = useAuth();

    return (
        <div className="flex items-center space-x-4">
            {user ? (
                <>
                    <span className="text-sm text-white">Welcome, {user.email}!</span>
                    <button
                        className="text-sm text-white uppercase hover:text-gray-300"
                        onClick={logOut}
                    >
                        Log Out
                    </button>
                </>
            ) : (
                <>
                    <button
                        className="text-sm hover:text-white uppercase"
                        onClick={onRegisterOpen}
                    >
                        Register
                    </button>
                    <button
                        className="text-sm hover:text-white uppercase"
                        onClick={onLoginOpen}
                    >
                        Log In
                    </button>
                </>
            )}
        </div>
    );
};

export default AuthButtons;
