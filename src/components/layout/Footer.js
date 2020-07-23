import React from 'react';
import Img from '../../img/logo.svg';
import Scissors from './../../img/scissors-footer.svg';
import Facebook from './../../img/facebook.png';
import Twitter from './../../img/twitter.png';
import Linkedin from './../../img/linkedin.png';
import Scroller from './../../img/scroll.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <img src={Img} alt='img' className='img-fluid' />
          </div>

          <div className='col-md-4 text-white text-right contact'>
            <p>Email: jordiestallon@gmail.com</p>
            <p>Phone: +1 409 222 443</p>
          </div>

          <div className='col-md-4 text-center'>
            <img src={Scissors} alt='img' className='img-fluid img_1' />
          </div>

          <div className='col-md-4 text-white text-left address'>
            <p>KKD Close 13445GH Welsley close Wellbourne,Huston Texas</p>
          </div>

          <div className='col-sm-12 text-center icons'>
            <Link to='#'>
              <img
                src={Facebook}
                alt='img'
                className='img-fluid mr-2 border pt-2 pb-2 px-3 icon_1'
              />
            </Link>

            <Link to='#'>
              <img
                src={Twitter}
                alt='img'
                className='img-fluid mr-2 border pt-2 pb-2 px-1 icon_2'
              />
            </Link>

            <Link to='#'>
              <img
                src={Linkedin}
                alt='img'
                className='img-fluid mr-2 border pt-2 pb-2 px-1 icon_3'
              />
            </Link>
          </div>
        </div>
      </div>

      <div className='col-sm-12 scroller text-right'>
        <img src={Scroller} alt='img' className='img-fluid' />
      </div>
      <div className='container-fluid col-sm-12 text-center text-white copyright'>
        <p>Copyright Doc Stylez 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
