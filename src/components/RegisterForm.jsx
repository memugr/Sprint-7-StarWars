import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterForm = ({ onSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        // Additional email validation
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration successful!");
            onSuccess();
        } catch (err) {
            console.error("Registration error:", err)
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already in use. Please log in instead.");
            } else if (err.code === "auth/invalid-email") {
                setError("The email address is invalid.");
            } else if (err.code === "auth/weak-password") {
                setError("Password should be at least 6 characters.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    // Validation email 
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <form onSubmit={handleRegister}>
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <input
                    type="password"
                    className="w-full p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700">
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
