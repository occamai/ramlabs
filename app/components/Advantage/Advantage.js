import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

class Advantage extends React.Component {
  
  onClickLink = (route) => {
    if(route === 'undefined')
      alert('This site is just a prototype - not all links work yet.');
    else
      this.props.history.push(route);
  }

  render() {
    const { img, title, description, pg } = this.props.data
    return (
      <div className='advantage'>
        <a className='advantage-link' onClick={() => this.onClickLink(pg)}>
          <img src={img} title={title} alt={title} />
          <div className='content-wrapper'>
            <div className='content-wrapper-inner'>
              <h1 className='title'>{title}</h1>
              <p>{this.props.data.description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default withRouter(Advantage);
