import React from 'react';
import Scissors from '../../../img/design-header1.png';
import img1 from '../../../img/img1.png';
import img2 from '../../../img/img2.png';
import img3 from '../../../img/img3.png';

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <img src={Scissors} alt='img' className='img-fluid' />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h2>my services</h2>
            <p className='text-white'>
              I offer wide range of male grooming services under one roof
            </p>
          </div>
        </div>

        <div className='row no-gutters'>
          <div className='col-md-4 mt-3'>
            <img src={img1} alt='img' className='img-fluid' />
            <h6 className='text-capitalize text-white text-center mt-3'>
              beard trim
            </h6>
          </div>

          <div className='col-md-4 mt-3'>
            <img src={img2} alt='img' className='img-fluid' />
            <h6 className='text-capitalize text-white text-center mt-3'>
              hair colouring
            </h6>
          </div>

          <div className='col-md-4 mt-3'>
            <img src={img3} alt='img' className='img-fluid' />
            <h6 className='text-capitalize text-white text-center mt-3'>
              hair styling
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;