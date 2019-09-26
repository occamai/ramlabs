import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

class ImageCard extends React.Component {

  onClickLink = (route) => {
    if(route === 'undefined')
      alert('This site is just a prototype - not all links work yet.');
    else
      this.props.history.push(route);
  }

  render() {
    const { img, title, description, pg } = this.props.data

    return (
      <div className='image-card'>
        {
          <a className='image-card-link' onClick={() => this.onClickLink(pg)}>
              <div className='img-wrapper'>
              <img src={img} title={title} alt={title} />
            </div>
            <div className='content-wrapper'>
              <h3 className='title'>{title}</h3>
              <p>{this.props.data.description}</p>
              <span>Learn More</span>
            </div>
          </a>
        }
      </div>
    );
  }
}

export default withRouter(ImageCard);
