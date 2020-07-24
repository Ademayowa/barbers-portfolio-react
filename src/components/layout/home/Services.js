import React from 'react';
import Scissors from '../../../img/design-header1.png';
import img1 from '../../../img/img1.png';
import img2 from '../../../img/img2.png';
import img3 from '../../../img/img3.png';
import Dots from '../../../img/two-dots.png';
import { motion } from 'framer-motion';

const Services = () => {
  // const containerVariants = {
  //   // Initial Obj
  //   init: {
  //     opacity: 0,
  //     z: '100vw',
  //   },
  //   // Animate Obj
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //   },
  // };
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
          <motion.div
            className='col-md-4 mt-3'
            whileHover={{ scale: 1.3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={img1} alt='img' className='img-fluid' />
            <h6 className='text-capitalize text-white text-center mt-3'>
              beard trim
            </h6>
          </motion.div>

          <motion.div
            className='col-md-4 mt-3'
            whileHover={{ scale: 1.3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={img2} alt='img' className='img-fluid' />
            <h6 className='text-capitalize text-white text-center mt-3'>
              hair colouring
            </h6>
          </motion.div>

          <motion.div
            className='col-md-4 mt-3'
            whileHover={{ scale: 1.3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={img3} alt='img' className='img-fluid' />
            <h6 className='text-capitalize text-white text-center mt-3'>
              hair styling
            </h6>
          </motion.div>
        </div>

        <div className='row'>
          <div className='col-sm-12 text-center mt-2'>
            <img src={Dots} alt='img' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
