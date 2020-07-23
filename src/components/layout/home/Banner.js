import React from 'react';
import Name from '../../../img/name.png';

const Banner = ({ title, subtitle }) => {
  return (
    <section className='banner'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <button className='btn btn-dark btn-lg ml-3'>Hire Me</button>
            <div className='text-right mt-2'>
              <img src={Name} alt='img' className='img-fluid img_1' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
