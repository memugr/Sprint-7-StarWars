import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const SocialLinks = () => (
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
);

export default SocialLinks;
