import React from 'react';
import Scissors from '../../../img/design-header1.png';

const HireMe = () => {
  return (
    <section className='hire'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <img src={Scissors} alt='img' className='img-fluid img_1' />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h2>i am available</h2>
            <p className='text-white'>
              Contact / Hire me for all your hair care needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
