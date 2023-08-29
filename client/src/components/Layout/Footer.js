import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-dark text-light p-3">

         <p className="text-center mt-3">
          <Link to ='/about' >About</Link>
          <Link to ='/contact' >Contact</Link>
          <Link to ='/policy' >Privacy Policy</Link>
         </p>

          <p className="text-center mt-3">
          <Link to ='/about'>Conditions of Use & Sale</Link>  
          <Link to ='/policy'>Privacy Notice</Link>  
          <Link to ='/contact'>Interest-Based Ads</Link>
          </p>

        <h2 className='text-center'>
          &copy; 1996-2023, Walhouse.com, Inc. or its affiliates
        </h2>
    </div>
  )
};

export default Footer;