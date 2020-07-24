import React from 'react';
import Arrow from '../../../img/drop-arrow.png';
import Time from '../../../img/time.png';
import Img1 from '../../../img/symbol.png';
import { Link } from 'react-router-dom';

const BookForm = () => {
  return (
    <section className='book-form'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4 d-none d-lg-block img_1 clipper'></div>

          <div className='col-lg-8 pl-lg-5 test'>
            <form className='forms'>
              <div className='form-row'>
                <div className='form-group col-md-5 pr-lg-2 mt-2'>
                  <input
                    type='text'
                    className='form-control form-control-lg mg_bottom'
                    placeholder='Name'
                  />
                </div>

                <div className='form-group col-md-5 pr-lg-2 mt-2'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Phone'
                  />
                </div>

                <div className='form-group col-md-5 pr-lg-2 mt-2'>
                  <input
                    type='text'
                    className='form-control form-control-lg margin_top'
                    placeholder='Email'
                  />
                </div>

                <div className='form-group col-md-5 pr-lg-2 mt-2'>
                  <input
                    type='text'
                    className='form-control form-control-lg margin_top'
                    placeholder='Service'
                  />
                  <div className='drop-down text-right'>
                    <img src={Arrow} alt='img' className='img-fluid arrow' />
                  </div>
                </div>

                <div className='form-group col-md-5 pr-lg-2 mt-2'>
                  <input
                    type='date'
                    className='form-control form-control-lg margin_top2'
                  />
                </div>

                <div className='form-group col-md-5 pr-lg-2 mt-2'>
                  <input
                    type='text'
                    className='form-control form-control-lg margin_top3'
                  />
                  <div className='drop-down text-right'>
                    <img src={Time} alt='img' className='img-fluid time ' />
                    <img src={Img1} alt='img' className='img-fluid symbol' />
                  </div>

                  <div className='col-sm-12 text-center'>
                    <Link to='#' className='btn btn-outline-dark btn-lg'>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookForm;
