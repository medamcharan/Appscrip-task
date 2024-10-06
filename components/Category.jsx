import React, { useState } from 'react';
import '../styles/Category.css';

const Category = ({ onToggleFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isOpen, setIsOpen] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [selectedSortOptions, setSelectedSortOptions] = useState([]);

  const categories = {
    idealFor: ['Men', 'Women', 'Kids'],
    occasion: ['Casual', 'Formal', 'Party'],
    work: ['Office', 'Field Work'],
    fabric: ['Cotton', 'Silk', 'Polyester'],
    segment: ['Luxury', 'Standard', 'Budget'],
    suitableFor: ['Summer', 'Winter'],
    rawMaterials: ['Leather', 'Wool', 'Denim'],
    pattern: ['Striped', 'Solid', 'Printed'],
  };

  const sortOptions = ['Newest First', 'Popular', 'Price High to Low', 'Price Low to High'];

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
  };

  const handleSortChange = (option) => {
    setSelectedSortOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    );
  };

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleFiltersVisibility = () => {
    setFiltersVisible((prev) => !prev);
    onToggleFilters();
  };

  const toggleSortVisibility = () => {
    setSortVisible((prev) => !prev);
  };

  return (
    <div className="category-container">
      <hr className="top-divider" />
      <div className="controls">
        <button className="toggle-filters-btn" onClick={toggleFiltersVisibility}>
          {filtersVisible ? 'HIDE FILTERS' : 'SHOW FILTERS'}
          <span className="arrow-icon">{filtersVisible ? '▼' : '▶'}</span>
        </button>
        <hr className="divider-line" />
        <div className="sort-container">
          <button className="toggle-sort-btn" onClick={toggleSortVisibility}>
            RECOMMENDED
            <span className="arrow-icon">{sortVisible ? '▲' : '▼'}</span>
          </button>
          {sortVisible && (
            <ul className="sort-options">
              {sortOptions.map((option) => (
                <li key={option} className="sort-item">
                  <label>
                    <input
                      type="checkbox"
                      value={option}
                      onChange={() => handleSortChange(option)}
                      checked={selectedSortOptions.includes(option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <hr className="bottom-divider" />
      <div className={`filters-container ${filtersVisible ? 'slide-down' : ''}`}>
        {Object.keys(categories).map((section) => (
          <div key={section} className="category-section">
            <div className="category-header" onClick={() => toggleSection(section)}>
              <span>{section.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
              <span className="arrow">{isOpen[section] ? '▲' : '▼'}</span>
            </div>
            {isOpen[section] && (
              <div className="category-options">
                {categories[section].map((category) => (
                  <label key={category} className="category-item">
                    <input
                      type="checkbox"
                      id={category}
                      value={category}
                      onChange={() => handleCheckboxChange(category)}
                      checked={selectedCategories.includes(category)}
                    />
                    {category}
                  </label>
                ))}
              </div>
            )}
            <hr className="category-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
