import React, { useState } from 'react';
import Name from '../../../img/name.png';
import shape1 from '../../../img/reactangle1.png';
import shape2 from '../../../img/shape2.png';
import shape3 from '../../../img/shape3.png';

const Banner = ({ title, subtitle }) => {
  const [shapes] = useState([
    {
      id: '1',
      img: shape1,
    },
    {
      id: '2',
      img: shape2,
    },
    {
      id: '3',
      img: shape3,
    },
  ]);

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
