import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SlHeart } from "react-icons/sl"; 
import { AiFillHeart } from "react-icons/ai"; 
import '../styles/ProductsList.css';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-header">
        <h2 className="product-name">{product.title}</h2>
        {isLiked ? (
          <AiFillHeart 
            className="like-icon liked" 
            aria-label="Unlike" 
            onClick={toggleLike} 
          />
        ) : (
          <SlHeart 
            className="like-icon" 
            aria-label="Like" 
            onClick={toggleLike} 
          />
        )}
      </div>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
