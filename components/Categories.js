import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faTree, faBed, faPencilRuler, faMountain, faChessRook, faIgloo, faHouse, faWater, faUmbrellaBeach, faEye, faDoorClosed, faCampground, faAngleRight, faFire, } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: "Icons", icon: faTicketAlt },
  { name: "Countryside", icon: faTree },
  { name: "Bed & breakfasts", icon: faBed },
  { name: "Design", icon: faPencilRuler },
  { name: "Top of the world", icon: faMountain },
  { name: "Castles", icon: faChessRook },
  { name: "Domes", icon: faIgloo },
  { name: "Cabins", icon: faHouse },
  { name: "Surfing", icon: faWater },
  { name: "Beachfront", icon: faUmbrellaBeach },
  { name: "Amazing views", icon: faEye },
  { name: "Rooms", icon: faDoorClosed },
  { name: "Camping", icon: faCampground },
  { name: "Trending", icon: faFire }
];

const Categories = ({ onCategoryChange }) => {
  return (
    <div className="flex items-center space-x-4 p-4 overflow-x-auto">
      {categories.map((category, index) => (
        <button 
          key={index} 
          className="whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full flex items-center space-x-2"
          onClick={() => onCategoryChange(category.name)}
        >
          <FontAwesomeIcon icon={category.icon} />
          <span>{category.name}</span>
        </button>
      ))}
      <button className="px-4 py-2 bg-gray-100 rounded-full">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Categories;
