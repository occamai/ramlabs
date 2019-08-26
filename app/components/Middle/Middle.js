import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Middle extends React.Component {


  render() {
    const { img, title } = this.props.data

    return (
      <div className='middle'>
        <Link className='middle-link' to='/'>
          <img src={img} title={title} alt={title} />
          <h3 className='title'>{title}</h3>
          <p>{this.props.data.description}</p>          
        </Link>
      </div>
    );
  }
}

export default Middle;
