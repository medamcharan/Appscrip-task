import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaLinkedin, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { SiGooglepay, SiPaypal, SiApplepay } from 'react-icons/si';
import { FaCcAmex, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import us from '../assets/images/us.png';

const Footer = () => {
  const [showMettMuse, setShowMettMuse] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showFollowUs, setShowFollowUs] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only execute this code in the browser
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleToggleMettMuse = () => setShowMettMuse(!showMettMuse);
  const handleToggleQuickLinks = () => setShowQuickLinks(!showQuickLinks);
  const handleToggleFollowUs = () => setShowFollowUs(!showFollowUs);
  const handleTogglePayments = () => setShowPayments(!showPayments);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettã muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact">
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettãmuse.com</p>
          <p>CURRENCY</p>
          <div className="currency">
            <img src={us} alt="US Flag" className="flag-icon" />
            <p> -USD</p>
          </div>
          <small className="currency-info">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </small>
        </div>
      </div>
      <div className="footer-copyright"></div>

      <div className="footer-bottom">
        <div className="footer-links">
          <div className="brand-links">
            <h3 onClick={handleToggleMettMuse} className="toggle-title">
              mettã muse {isMobile && (showMettMuse ? <FaAngleUp /> : <FaAngleDown />)}
            </h3>
            {(showMettMuse || !isMobile) && (
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliance Docs</li>
              </ul>
            )}
          </div>
          <div className="divider"></div>

          <div className="quick-links">
            <h3 onClick={handleToggleQuickLinks} className="toggle-title">
              QUICK LINKS {isMobile && (showQuickLinks ? <FaAngleUp /> : <FaAngleDown />)}
            </h3>
            {(showQuickLinks || !isMobile) && (
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            )}
          </div>
        </div>
        <div className="divider"></div>

        <div className="social-payments">
          <div className="follow-us">
            <h3 onClick={handleToggleFollowUs} className="toggle-title">
              FOLLOW US {isMobile && (showFollowUs ? <FaAngleUp /> : <FaAngleDown />)}
            </h3>
            {(showFollowUs || !isMobile) && (
              <div className="social-icons">
                <FaInstagram className="icon" />
                <FaLinkedin className="icon" />
              </div>
            )}
          </div>
          <div className="divider"></div>
          <div className="payments">
            <h3 onClick={handleTogglePayments} className="toggle-title">
              mettã muse ACCEPTS {isMobile && (showPayments ? <FaAngleUp /> : <FaAngleDown />)}
            </h3>
            {(showPayments || !isMobile) && (
              <div className="payment-icons">
                <SiGooglepay className="payment-icon" />
                <FaCcMastercard className="payment-icon" />
                <SiPaypal className="payment-icon" />
                <FaCcAmex className="payment-icon" />
                <SiApplepay className="payment-icon" />
                <FaCcVisa className="payment-icon" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div >
        <p className='para'>Copyright &copy; 2024 mettã muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
