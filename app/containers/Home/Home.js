/*
 * Home
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import IconCard from 'components/IconCard';
import ImageCard from 'components/ImageCard';
import './style.scss';
import { DATA_1, DATA_2, DATA_3, DATA_4 } from './data';

export default class Home extends React.PureComponent {
  render() {    
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta name='description' content='Ramlabs Home' />
        </Helmet>
        <div className='home'>
          <div className='main-slider-wrapper'>
            <div className='main-slider-wrapper-caption'>
              <div className='main-slider-wrapper-caption-txt'>
                <h2 className='main-slider-wrapper-caption-txt-lg'>Innovation</h2>
                <h2 className='main-slider-wrapper-caption-txt-lg'>Incubation</h2>
                <h2 className='main-slider-wrapper-caption-txt-lg'>Acceleration</h2>
                <h6 className='main-slider-wrapper-caption-txt-md'>from Chips to Apps</h6>
              </div>
            </div>
          </div>
          <div className='section-grey'>
            <div className='container'>
              <div className='row'>
                {
                  DATA_1.map((data, index) =>
                    <div className='col-md-6 p-b-30'>
                      <IconCard data = {data} key={`${index}-data-1`}/>
                    </div>
                  )
                }
              </div>
              <div className='row'>
                {
                  DATA_2.map((data, index) =>
                    <div className='col-md-4 p-b-30'>
                      <IconCard data = {data} key={`${index}-data-2`}/>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className='section-white'>
            <div className='container'>
              <div className='row'>
                {
                  DATA_3.map((data, index) =>
                    <div className='col-md-6 p-b-30'>
                      <ImageCard data = {data} key={`${index}-data-img-1`}/>
                    </div>
                  )
                }
              </div>
              <div className='row'>
                {
                  DATA_4.map((data, index) =>
                    <div className='col-md-4 p-b-30'>
                      <ImageCard data = {data} key={`${index}-data-img-2`}/>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

Home.propTypes = {
  
};
