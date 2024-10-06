import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import Avatar from '@mui/material/Avatar';
import { SlHeart, SlMagnifier, SlBag, SlUser } from "react-icons/sl";
import logo from '../assets/images/LOGO.jpeg';
import { FaAngleDown } from 'react-icons/fa';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined to ensure code is only run in the browser
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);
      
      // Cleanup listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <Avatar alt="Remy Sharp" src={logo} />
      </div>

      <div className="header-center">
        <h1 className="logo-text">LOGO</h1>
      </div>

      <div className="header-right icons">
        {isMobile ? (
          <>
            <SlMagnifier aria-label="Search" />
            <SlBag aria-label="Cart" />
          </>
        ) : (
          <>
            <SlMagnifier aria-label="Search" />
            <SlHeart aria-label="Wishlist" />
            <SlBag aria-label="Cart" />
            <SlUser aria-label="Profile" />
          </>
        )}
        <p>ENG <FaAngleDown /></p>
      </div>

      <div className="nav">
        <nav className="nav">
          <a href="#" aria-label="SHOP">SHOP</a>
          <a href="#" aria-label="SKILLS">SKILLS</a>
          <a href="#" aria-label="STORIES">STORIES</a>
          <a href="#" aria-label="ABOUT">ABOUT</a>
          <a href="#" aria-label="CONTACT US">CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
