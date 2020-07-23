import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-info'>
      <div className='container-fluid'>
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
          <span className='navbar-toggler-icon fas fa-bars text-white' />
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
      </div>
    </nav>
  );
};

export default Navbar;
