import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import LoginRequiredModal from "../modal/LoginRequiredModal";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => setModalOpen(false);

    useEffect(() => {
        if (!user) {
            setModalOpen(true);
        }
    }, [user]);

    if (!user) {
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