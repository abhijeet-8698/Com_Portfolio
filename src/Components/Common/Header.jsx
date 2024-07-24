import React, { useState } from 'react';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { red } from '@mui/material/colors';

function Header(props) {
    const [showLinks, setShowLinks] = useState(false);
    // const [company, setCompany] = useState("SpyTech Cognitive Solutions");

    const toggleMenu = () => {
        setShowLinks(!showLinks);
    };

    const HomePage = () => {
        // Handle navigation logic here
    };

    return (
        <nav className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-xl">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center text-white">
                    <div className="font-bold text-3xl font-mono">
                    <button onClick={HomePage} className="hover:border-b-2 border-blue-500 hover:text-blue-500 transition-colors flex items-center">
                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo" className="h-6 w-6 mr-2" />
                        <span className="text-lg">{props.com}</span>
                        {/* <span className="text-sm text-gray-200">Technologies</span> */}
                    </button>
                    </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>

                {/* Navigation Links */}
                <div className="text-xl">
                    <ul className={`lg:flex lg:items-center lg:space-x-4 ${showLinks ? 'block' : 'hidden'}`}>
                        <li>
                            <a href="#" className="text-white hover:text-blue-700 transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-blue-700 transition-colors duration-300">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-blue-700 transition-colors duration-300">Services</a>
                        </li>
                        <li className="text-white hover:text-blue-700 transition-colors duration-300 flex items-center">
                            <PermPhoneMsgIcon sx={{ color: red }} className="mr-1" />
                            <a href="#" className="ml-1">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;