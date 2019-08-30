import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Logo extends React.Component {


  render() {
    const { img, title, route } = this.props.data
    
    return (
      <div className='logo'>
        <Link className='logo-link' to={route?route:'/'}>
          <div className='img-wrapper'>
            <img src={img} title={title} alt={title} />
          </div>
        </Link>
      </div>
    );
  }
}

export default Logo;
