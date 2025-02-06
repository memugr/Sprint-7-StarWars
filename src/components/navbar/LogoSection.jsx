import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../assets/logo.png"

const LogoSection = () => (
    <div className="mb-4">
        <Link to="/">
            <img src={starWarsLogo} alt="Star Wars Logo" className="h-16" />
        </Link>
    </div>
);

export default LogoSection;
