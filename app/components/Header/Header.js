import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../images/banner.png';
import './style.scss';

class Header extends React.Component { 
  constructor(props) {
		super(props);
		this.state = {
			mobileNavOpen: false,
		}
	}

	handleMobileMenu = () => {
		this.setState({ mobileNavOpen: !this.state.mobileNavOpen });
  }
  
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <div className='site-branding'> 
                <a href='https://www.google.com/' className='custom-logo-link'>
                  <img src={Banner} title='Ramlabs - Logo' alt='Ramlabs' />
                </a>
                <div className='slicknav_menu' onClick={this.handleMobileMenu}>
                  <div className='slicknav_icon'>
                    <span className='slicknav_icon-bar'></span>
                    <span className='slicknav_icon-bar'></span>
                    <span className='slicknav_icon-bar'></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='main-navigation'>
                <Link className='router-link' to='/'>
                  Home
                </Link>
                <Link className='router-link' to='/about'>
                  About
                </Link>
                <Link className='router-link' to='/contact'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className={`${this.state.mobileNavOpen ? 'nav--mobile--menu' : 'nav--mobile--menu--inactive'}`}>
            <Link className='nav--mobile--menu-link' to='/'>
              Home
            </Link>
            <Link className='nav--mobile--menu-link' to='/about'>
              About
            </Link>
            <Link className='nav--mobile--menu-link' to='/contact'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
