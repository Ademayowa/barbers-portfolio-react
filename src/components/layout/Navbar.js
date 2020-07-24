import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-info'>
      <motion.div
        className='container-fluid'
        initial={{ y: -250 }}
        animate={{ y: -10 }}
      >
        <Link className='navbar-brand' to='/'>
          <img src={Logo} alt='logo' className='img-fluid' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span />
          <svg
            width='3em'
            height='3em'
            viewBox='0 0 16 16'
            class='bi bi-filter-right'
            fill='#fff'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z'
            />
          </svg>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                My Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/services'>
                Achivements
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Reviews
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
