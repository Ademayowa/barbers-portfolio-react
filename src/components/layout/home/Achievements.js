import React from 'react';
import Img from '../../../img/design-header2.png';
import Img1 from '../../../img/img4.png';
import Img2 from '../../../img/img5.png';
import Img3 from '../../../img/img6.svg';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section className='achieve'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 mt-5 text-center'>
            <img src={Img} alt='img' className='img-fluid' />
          </div>

          <motion.div
            className='col-sm-12'
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.5, duration: 1.6 }}
          >
            <h2 className='text-center'>archievements</h2>
            <p>
              Jordie Stallon is a classical male grooming and traditional
              Barber, Providing a comprehensive menu of traditional and
              contemporary servicestowards men’s hair, beards, hot towel shaves,
              facials, and body treatments.A classic Barber Shop offering
              grooming services and products in the true sense.
            </p>
          </motion.div>

          <div className='col-md-4 text-center'>
            <img src={Img1} alt='img' className='img-fluid ' />
            <h5 className='ml-3'>200+</h5>
            <h6>cute hair styles</h6>
          </div>

          <div className='col-md-4 mt-4 text-center'>
            <img src={Img2} alt='img' className='img-fluid' />
            <h5 className='ml-3'>4000+</h5>
            <h6>satisfied clients</h6>
          </div>

          <div className='col-md-4 mt-4 text-center'>
            <img src={Img3} alt='img' className='img-fluid' />
            <h5 className='ml-3'>10 years</h5>
            <h6>of experience</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
