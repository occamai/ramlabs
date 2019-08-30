import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class ImageCard extends React.Component {


  render() {
    const { img, title, description, id } = this.props.data

    return (
      <div className='image-card'>
        <Link className='image-card-link' to={`/product/${id}`}>
          <div className='img-wrapper'>
            <img src={img} title={title} alt={title} />
          </div>
          <div className='content-wrapper'>
            <h3 className='title'>{title}</h3>
            <p>{this.props.data.description}</p>
            <span>Learn More</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default ImageCard;
