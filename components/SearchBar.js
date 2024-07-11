import React from 'react';

const SearchBar = ({ searchType }) => {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md">
        <div className="flex items-center px-4 py-2 border-r border-gray-300">
          <label className="mr-2 font-semibold">Where</label>
          <input type="text" placeholder="Search destinations" className="outline-none"/>
        </div>
        {searchType === 'stays' && (
          <>
            <div className="flex items-center px-4 py-2 border-r border-gray-300">
              <label className="mr-2 font-semibold">Check in</label>
              <input type="text" placeholder="Add dates" className="outline-none"/>
            </div>
            <div className="flex items-center px-4 py-2 border-r border-gray-300">
              <label className="mr-2 font-semibold">Check out</label>
              <input type="text" placeholder="Add dates" className="outline-none"/>
            </div>
          </>
        )}
        {searchType === 'experiences' && (
          <div className="flex items-center px-4 py-2 border-r border-gray-300">
            <label className="mr-2 font-semibold">Date</label>
            <input type="text" placeholder="Add dates" className="outline-none"/>
          </div>
        )}
        <div className="flex items-center px-4 py-2">
          <label className="mr-2 font-semibold">Who</label>
          <input type="text" placeholder="Add guests" className="outline-none"/>
        </div>
        <button className="px-4 py-2 bg-pink-500 rounded-full text-white">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
