import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class IconCard extends React.Component {


  render() {
    const { img, title } = this.props.data

    return (
      <div className='icon-card'>
        <Link className='icon-card-link' to='/'>
          <div className='img-wrapper'>
            <img src={img} title={title} alt={title} />
          </div>
          <h3 className='title'>{title}</h3>
          {
            this.props.data.description ? 
            <p>{this.props.data.description}</p>
            : null
          }
        </Link>
      </div>
    );
  }
}

export default IconCard;
