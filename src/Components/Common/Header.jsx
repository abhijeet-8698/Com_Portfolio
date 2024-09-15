import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();

  const handleProposalRequest = () => {
    // alert("Proposal request");
    navigate('/contact'); // Navigate to a specific route - constact_page
  }

  
  return (
    <nav className="bg-black fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a className="flex items-center">
          {/* <img className="pb-1" src="assets/img/logo.png" alt="logo" /> */}
          <h2 className="text-white">{props.com}</h2>
        </a>
        <button className="text-white lg:hidden p-2" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
       <div className="hidden lg:flex flex-grow items-center" id="navbarSupportedContent">
          <ul className="flex space-x-4 ml-auto">
            <li className="relative group">
              <Link className="text-white" to="/" role="button">Home</Link>
            </li>
            <li className="relative group">
              <Link className="text-white" to="/services" role="button">Services</Link>
            </li>
            <li>
              <a className="text-white" href="#menu">Menu</a>
            </li>
            <li className="relative group">
              <Link className="text-white" to="/contact" role="button">Contact</Link>
            </li>
          </ul>
          <ul className="flex items-center ml-8">
            <li>
              <button onClick={handleProposalRequest} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg rounded-full px-4 py-2">
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
