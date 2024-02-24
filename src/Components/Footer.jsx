import React from 'react';
import { FaFacebook, FaGithub,FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-4 mb-4">
          <a href="https://www.facebook.com/anand.tiwari.313371" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl hover:text-blue-500 transition-colors duration-300 ease-in-out" />
          </a>
          <a href="https://www.instagram.com/apna_nandu_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-pink-500 transition-colors duration-300 ease-in-out" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-500 transition-colors duration-300 ease-in-out" />
          </a>
          <a href="https://github.com/anand-bits" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-600 transition-colors duration-300 ease-in-out" />
          </a>
        </div>
        <p className="text-lg mb-4">Connect with us on social media</p>
        <p className="text-lg mb-2">Working in UST Global as a Data Engineer at Trivandrum</p>
        <p className="text-lg mb-2">Can connect at email: <a href="mailto:h20220277@pilani.bits-pilani.ac.in" className="text-blue-400 hover:underline">h20220277@pilani.bits-pilani.ac.in</a></p>
        <p className="text-lg">Copyright {year} | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
