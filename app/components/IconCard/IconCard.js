import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';

class IconCard extends React.Component {

  onClickLink = (route) => {
    if(route === 'undefined')
      alert('This site is just a prototype - not all links work yet.');
    else
      this.props.history.push(route);
  }

  render() {
    const { img, title, pg } = this.props.data;
    
    return (
      <div className='icon-card'>
        <a className='icon-card-link' onClick={() => this.onClickLink(pg)}>
          <div className='img-wrapper'>
            <img src={img} title={title} alt={title} />
          </div>
          {
            this.props.data.title &&
              <h3 className='title'>{title}</h3>
          }          
          {
            this.props.data.description &&
              <p>{this.props.data.description}</p>
          }
        </a>
      </div>
    );
  }
}

export default withRouter(IconCard);
