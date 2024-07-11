import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ onLinkClick }) => {
  const [activeButton, setActiveButton] = useState('stays');

  const handleButtonClick = (type) => {
    setActiveButton(type);
    onLinkClick(type);
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 bg-white shadow-md">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <div className="text-2xl font-bold text-pink-500 flex-shrink-0">
          <i className="fab fa-airbnb"></i>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => handleButtonClick('stays')} 
            className={`px-4 py-2 font-semibold ${activeButton === 'stays' ? 'text-black' : 'text-gray-500'}`}>
            Stays
          </button>
          <button 
            onClick={() => handleButtonClick('experiences')} 
            className={`px-4 py-2 font-semibold ${activeButton === 'experiences' ? 'text-black' : 'text-gray-500'}`}>
            Experiences
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="font-semibold px-4 py-2 bg-gray-100 rounded-full">Airbnb your home</button>
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
            <i className="fas fa-globe"></i>
          </button>
          <button className="flex items-center p-2 bg-gray-100 rounded-full">
            <i className="fas fa-bars"></i>
            <i className="fas fa-user-circle ml-2"></i>
          </button>
        </div>
      </div>
      <SearchBar searchType={activeButton} />
    </div>
  );
};

export default Navbar;
