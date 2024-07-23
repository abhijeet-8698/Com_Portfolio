import React from 'react'
import { useState } from 'react';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { red } from '@mui/material/colors';
// import  {useNavigate}  from 'react-router-dom';

function Header() {
    // const navigate = useNavigate();
    const [showLinks, setShowLinks] = useState(false);
    const[company,setCompany]=useState("SpyTech Cognitive Solutions");
    const toggleMenu = () => {
        setShowLinks(!showLinks);
    };
    
    const HomePage=()=>{
        // alert('sdfghjk')
        // navigate('/');
    }

    return (
        <>
            <nav className="bg-black p-4 h-[13vh] shadow-xl">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center text-white font-normal hover:font-bold duration-300">
                        <div className='font-bold text-3xl font-mono'>
                            <button onClick={HomePage} className="hover:border-b-2 border-blue-500 hover:text-blue-500 transition-colors">
                               {company}
                            </button>
                        </div>
                    </div>

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
                    <div className='text-xl'>
                        <ul className={`lg:flex lg:items-center lg:space-x-4 ${showLinks ? 'block' : 'hidden'
                            }`}>
                            <li>
                                <a href="#" className="text-white hover:text-blue-700 transition-colors duration-300">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-700 transition-colors duration-300">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-700 transition-colors duration-300">Services</a>
                            </li>
                            <li>
                                <div className='text-white hover:text-blue-700 transition-colors duration-300'>
                                    <a><PermPhoneMsgIcon sx={{ color: red }} /></a>
                                    <a href="#"> Contact</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
