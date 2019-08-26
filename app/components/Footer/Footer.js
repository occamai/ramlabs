import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);

import Banner from '../../images/banner.png';
import './style.scss';

class Footer extends React.Component { 
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <a href='https://www.google.com/' className='custom-logo-link'>
                <img src={Banner} alt='Ramlabs - Logo' alt='Ramlabs' />
              </a>
            </div>
            <div className='col-md-8 panel-grid-cell'>
              <div className='row'>
                <div className='col-3 panel-grid-cell-col'>
                  <h3 className='widget-title'>HOME</h3>
                  <div className='menu-container'>
                    <Link className='menu-container-link' to='/'>Overview</Link>
                    <Link className='menu-container-link' to='/'>Applications</Link>
                  </div>
                </div>
                <div className='col-3 panel-grid-cell-col'>
                  <h3 className='widget-title'>PRODUCT</h3>
                  <div className='menu-container'>
                    <Link className='menu-container-link' to='/product/1'>Product Overview</Link>
                  </div>
                </div>
                <div className='col-3 panel-grid-cell-col'>
                  <h3 className='widget-title'>ABOUT</h3>
                  <div className='menu-container'>
                    <Link className='menu-container-link' to='/'>Company</Link>
                    <Link className='menu-container-link' to='/'>Overview</Link>
                    <Link className='menu-container-link' to='/'>Management</Link>
                    <Link className='menu-container-link' to='/'>Team</Link>
                    <Link className='menu-container-link' to='/'>News</Link>
                  </div>
                </div>
                <div className='col-3 panel-grid-cell-col'>
                  <h3 className='widget-title'>CONTACT US</h3>
                  <div className='menu-container'>
                    <Link className='menu-container-link' to='/'>Email</Link>
                    <Link className='menu-container-link' to='/'>Location/Address</Link>
                    <Link className='menu-container-link' to='/'>Inquiry Form</Link>
                  </div>
                  <h3 className='widget-title-follow'>FOLLOW US</h3>
                  <div className='menu-follow-container'>
                    <a className='menu-follow-container-link' href='https://www.linkedin.com/' target='_blank'>
                      <FontAwesomeIcon icon={['fab', 'linkedin']} size='lg' color='#3371b7' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 copyright'>
              <span>Copyright 2019 © All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
