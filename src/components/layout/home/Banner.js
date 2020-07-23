import React from 'react';
import Name from '../../../img/name.png';
import Img1 from '../../../img/reactangle1.png';
import Img2 from '../../../img/reactangle2.png';
import Img3 from '../../../img/reactangle3.png';

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

            <div className='col-sm-12 d-flex flex-end align-items-center justify-content-center test'>
              <div className='col-md-4'>
                <img src={Img1} alt='img' className='img-fluid shape_1' />
              </div>

              <div className='col-md-4'>
                <img src={Img2} alt='img' className='img-fluid shape_2' />
              </div>

              <div className='col-md-4'>
                <img src={Img3} alt='img' className='img-fluid shape_3' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
