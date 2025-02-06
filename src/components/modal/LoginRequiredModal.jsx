import React from "react";
import { useNavigate } from "react-router-dom";

const LoginRequiredModal = ({ isOpen }) => {
    const navigate = useNavigate();
    
    const handleClose = () => {
        navigate("/");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="modal rounded-md p-6 w-96">
                <h2 className="text-center text-lg font-semibold mb-4">
                    Login Required
                </h2>
                <p className="text-center mb-6">
                You must be logged in to access this page.
                </p>
                <div className="flex justify-center">
                    <button
                        className="px-4 py-2 bg-zinc-600 text-white rounded hover:bg-zinc-700"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginRequiredModal;
