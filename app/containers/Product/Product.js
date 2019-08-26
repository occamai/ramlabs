/*
 * Home
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle
} from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import ReactPlayer from 'react-player'
import IconCard from 'components/IconCard';
import ImageCard from 'components/ImageCard';
import Advantage from 'components/Advantage';
import Middle from 'components/Middle';
import './style.scss';
import { DATA_1, DATA_2 } from './data';
import data_1_a from '../../images/new_ai_robot.png';
import data_1_video from '../../images/farmers.mp4';

const customStyles = {
  overlay: { 
    backgroundColor: 'rgba(0,0,0,.85)',
    zIndex: 3
  },
  content : {
    position: 'relative',
    top: '20%',
    left: '0px',
    right: '0px',
    bottom: '0px',
    display: 'flex',
    flexDirection: 'column',
    padding: '2px',
    // color: 'white', 
    backgroundColor: 'rgba(0,0,0,0.8)', 
    // margin: '15% calc(15% - 60px)',
    // height: 'auto',
    border: 'none', 
    // borderRadius: '5px', 
    alignItems: 'center',
    maxWidth: '898px',
    margin: '15% auto',
    height: '45%',
    width: '85%',
  }
};

export default class Product extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    };
  }

  handleCloseModal = () =>  this.setState({isOpen: false})
  
  render() {    
    return (
      <article>
        <Helmet>
          <title>Product</title>
          <meta name='description' content='Ramlabs Product' />
        </Helmet>
        <div className='product'>
          <div className='product-title'>
            <div className='product-title-img-box'>
              <img src={data_1_a} />
            </div>
            <div className='product-title-container'>
              <div className='product-title-container-content'>
                <h1 className='product-title-container-content-blue'>Edge AI Computing-Based</h1>
                <h1 className='product-title-container-content-black'>Smart City Solutions</h1>
                <p className='product-title-container-content-p'>Empowering smart cities with AI capabilities has become an inevitable trend as technologies develop.With Horizon's proprietary edge AI computing and superior deep learning algorithms, AI computations can be achieved at edge in forms of video structuring industrial PCs or a full stack smart city solution that provides ultimate efficiency in both power consumption and cost while sustaining a high performance.</p>
              </div>
            </div>
          </div>
          <div className='product-content'>
            <div className='product-content-title'>
              <h1 className='product-content-title-petal'>Technical Advantages</h1>
            </div>
            <div className='product-content-advantage'>
              {
                DATA_1.map((data, index) =>
                  <Advantage data={data} key={`${index}-data-img-1`} />
                )
              }
            </div>
          </div>
          <div className='product-middle'>
            <div className='product-middle-title'>
              <h1 className='product-middle-title-petal'>Intelligent Traffic Platform</h1>
            </div>
            <div className='product-middle-list'>
              {
                DATA_2.map((data, index) =>
                  <Middle data={data} key={`${index}-data-img-1`} />
                )
              }
            </div>
          </div>
          <div className='product-function'>
            <div className='product-function-word'>
              <div className='product-function-word-wrapper'>
                <h1 className='product-function-word-wrapper-title'>Video Structuring</h1>
                <p className='product-function-word-wrapper-content'>Based on the deep learning technologies, it detects, captures, tracks, and identifies pedestrians and vehicles in every frame of the video, and converts non-structured video data to structured analytical data of different types of road users.</p>
              </div>
            </div>
            <div className='product-function-photo'>
              <img src={data_1_a} />
            </div>
          </div>
          <div className='product-video'>
            <div className='product-video-mask'>
              <div>
                <h4>Video</h4>
                <div className='icon' onClick={()=>this.setState({isOpen: true})}><FontAwesomeIcon icon={faPlayCircle} size='lg' /></div>
              </div>
            </div>
            <div className='product-video-banner'>
              <img src={data_1_a} />
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          contentLabel='Controls'
          style={customStyles}
          ariaHideApp={false}
        >
          <ReactPlayer
            url={data_1_video}
            controls={true}
            playing={false}
            width='100%'
            height='100%'
          />
        </ReactModal>
      </article>
    );
  }
}

Product.propTypes = {
  
};
