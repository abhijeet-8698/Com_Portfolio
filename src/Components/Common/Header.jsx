import React from 'react';

const Header = (props) => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://i.imgur.com/j9W8G04.png" alt="Manatine Logo" className="h-8 mr-4" />
          <h1 className="text-2xl font-bold">{props.com}</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">Features</a>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">Pricing</a>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">Learn</a>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">Community</a>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;