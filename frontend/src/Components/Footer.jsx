import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-4 mb-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
        </div>
        <p className="text-lg">Connect with us on social media</p>
        <p className="text-lg">Copyright {year} | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
