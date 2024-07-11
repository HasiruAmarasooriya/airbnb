import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Experiences from '../components/Experiences';

export default function Home() {
  const [searchType, setSearchType] = useState('stays');
  const [selectedCategory, setSelectedCategory] = useState('Icons');

  const handleLinkClick = (type) => {
    setSearchType(type);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar onLinkClick={handleLinkClick} />
      <Categories onCategoryChange={handleCategoryChange} />
      <Experiences category={selectedCategory} />
    </div>
  );
}
