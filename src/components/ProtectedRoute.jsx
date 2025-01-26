import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import LoginRequiredModal from "./LoginRequiredModal";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => setModalOpen(false);

    if (!user) {
        setTimeout(() => setModalOpen(true), 0);
        return (
            <>
                <LoginRequiredModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                />
            </>
        );
    }

    return children;
};

export default ProtectedRoute;