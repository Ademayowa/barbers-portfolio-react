import React from 'react';
import Design from '../../../img/design-header1.png';
import Rectangle from '../../../img/clients-rectangle.png';
import Clients1 from '../../../img/clients.png';
import Shape from '../../../img/clients-shape.png';
import Quote from '../../../img/quote.png';
import Name from '../../../img/client_name.png';
import Clientshape1 from '../../../img/clients-shape1.png';
import Clientshape2 from '../../../img/clients-shape2.png';
import Clientshape3 from '../../../img/clients-shape3.png';
import Dots from '../../../img/two-dots.png';

const Clients = () => {
  return (
    <section className='clients'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <img src={Design} alt='img' className='img-fluid' />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h2>happy clients</h2>
            <p className='text-white'>Service Reviews from my Top Clients</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <img src={Rectangle} alt='img' className='img-fluid img_1' />
            <div className='col-md-6 img_2'>
              <img src={Clients1} alt='img' />
            </div>

            <div className='col-md-6 img_3'>
              <img src={Shape} alt='img' className='img-fluid' />
            </div>

            <div className='col-md-6 ml-auto text-white margin_top'>
              <p className='px-4'>
                Service is very good, reasonable rate and awsome sense of
                creativity compared to most top proffesional hair stylists. He
                has a mild touch but gives nothing but the bestto ehance oce
                looks
              </p>
              <div className='col-md-11 quote text-right'>
                <img src={Quote} alt='img' className='img-fluid' />
              </div>

              <div className='col-md-8 ml-2 client_name'>
                <img src={Name} alt='img' className='img-fluid' />
              </div>
            </div>
          </div>

          <div className='col-sm-12 d-flex'>
            <div className='col-md-4'>
              <img src={Clientshape1} alt='img' className='img-fluid shape_1' />
            </div>

            <div className='col-md-4'>
              <img src={Clientshape2} alt='img' className='img-fluid shape_2' />
            </div>

            <div className='col-md-4'>
              <img src={Clientshape3} alt='img' className='img-fluid shape_3' />
            </div>
          </div>

          <div className='col-sm-12 two-dots text-center'>
            <img src={Dots} alt='img' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
