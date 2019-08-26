import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Advantage extends React.Component {


  render() {
    const { img, title, description } = this.props.data
    return (
      <div className='advantage'>
        <Link className='advantage-link' to=''>
          <img src={img} title={title} alt={title} />
          <div className='content-wrapper'>
            <h1 className='title'>{title}</h1>
            <p>{this.props.data.description}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Advantage;
