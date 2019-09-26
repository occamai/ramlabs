import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

class Middle extends React.Component {

  onClickLink = (route) => {
    if(route === 'undefined')
      alert('This site is just a prototype - not all links work yet.');
    else
      this.props.history.push(route);
  }

  render() {
    const { img, title, pg } = this.props.data

    return (
      <div className='middle'>
        <a className='middle-link' onClick={() => this.onClickLink(pg)}>
          <img src={img} title={title} alt={title} />
          <h3 className='title'>{title}</h3>
          <p>{this.props.data.description}</p>          
        </a>
      </div>
    );
  }
}

export default withRouter(Middle);
