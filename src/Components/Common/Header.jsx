import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleProposalRequest = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a className="flex items-center">
          {/* <img className="pb-1" src="assets/img/logo.png" alt="logo" /> */}
          <h2 className="text-white text-2xl font-bold">{props.com}</h2>
        </a>
        <button
          className={`text-white lg:hidden p-2 ${isOpen ? 'hidden' : 'block'}`}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className={`lg:flex flex-grow items-center ${isOpen ? 'flex' : 'hidden'}`} id="navbarSupportedContent">
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 ml-auto">
            <li className="relative group">
              <Link className="text-white py-2 px-4 block" to="/" role="button" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="relative group">
              <Link className="text-white py-2 px-4 block" to="/services" role="button" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li>
              <a className="text-white py-2 px-4 block" href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
            </li>
            <li className="relative group">
              <Link className="text-white py-2 px-4 block" to="/contact" role="button" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
          <ul className="flex items-center ml-0 lg:ml-8 flex-col lg:flex-row">
            <li className="mb-2 lg:mb-0">
              <button
                onClick={handleProposalRequest}
                className="bg-gradient-to-tr from-blue-400 to-blue-600 text-white shadow-lg rounded-full px-4 py-2"
              >
                Request for Proposal
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
