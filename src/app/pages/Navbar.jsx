import React, { useState } from "react";
import SocialLinks from "../../components/SocialLinks";
import AuthButtons from "../../components/AuthButtons";
import LogoSection from "../../components/LogoSection";
import NavLinks from "../../components/NavLinks";
import Modal from "../../components/Modal";
import RegisterForm from "../../components/RegisterForm";
import LoginForm from "../../components/LoginForm";

const Navbar = () => {
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    return (
        <div className="navbar fixed top-0 left-0 w-screen z-50">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
                <SocialLinks />
                <AuthButtons
                    onRegisterOpen={() => setRegisterModalOpen(true)}
                    onLoginOpen={() => setLoginModalOpen(true)}
                />
            </div>
            <header className="flex flex-col items-center px-6 py-4">
                <LogoSection />
                <NavLinks />
            </header>
            <Modal isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)}>
                <h2 className="text-xl font-bold mb-4">Register</h2>
                <RegisterForm onSuccess={() => setRegisterModalOpen(false)} />
            </Modal>
            <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
                <h2 className="text-xl font-bold mb-4">Log In</h2>
                <LoginForm onSuccess={() => setLoginModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default Navbar;
