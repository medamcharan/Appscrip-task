import React, { useState } from 'react';
import '../styles/Products.css';
import ProductsList from './ProductsList';
import Category from './Category';

const Products = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);

  const handleToggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <main className="main-content">
      <section className="hero">
      <br></br>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <br></br>
        
        <p className='para1'> Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus</p>
        
        <p className='para1'>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </section>
      <div className="content-container">
        <div className={`category-products-container ${filtersVisible ? 'filters-visible' : ''}`}>
          <Category onToggleFilters={handleToggleFilters} />
          <div className='productsList'>
            <ProductsList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
