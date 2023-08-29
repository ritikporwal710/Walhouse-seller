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


        <h3 className='text-center'>
          <ul>
          <li><a href="">Conditions of Use & Sale</a></li>  
          <li> <a href="">Privacy Notice</a></li>  
          <li><a href="">Interest-Based Ads</a></li>
          </ul>
        </h3>

        <h2 className='text-center'>
          &copy; 1996-2023, Walhouse.com, Inc. or its affiliates
        </h2>
    </div>
  )
}

export default Footer