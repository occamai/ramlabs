/*
 * Home
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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
import { DATA } from './data';
import data_1_a from '../../images/new_ai_robot.png';
import data_1_video from '../../images/farmers.mp4';
import data_1_chip from '../../images/GSI_chip.png';

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
    margin: '10% auto',
    height: '45%',
    width: '85%',
  }
};

export default class Product extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      data: {}
    };
  }

  componentDidMount() {
    DATA.forEach( e => {
      if(e.id == this.props.match.params.productid){ // get data by product id
        this.setState({data: e})
      }
    })
  }

  handleCloseModal = () =>  this.setState({isOpen: false})
  
  render() {
    const { data } = this.state
    var desc = []
    if(Object.keys(data).length > 0) {
      desc = data.product.description.split('\n')
    }
    
    return (
      <article>
        <Helmet>
          <title>Product</title>
          <meta name='description' content='Ramlabs Product' />
        </Helmet>
        {
          Object.keys(data).length > 0 && <div>
            <div className='product'>
              <div className='product-title'>
                <div className='product-title-img-box'>
                  <img src={data.main_image} />
                </div>
                <div className='product-title-container'>
                  <div className='product-title-container-content'>
                    <h1 className='product-title-container-content-blue'>{data.product.title}</h1>
                    <h1 className='product-title-container-content-black'>{data.product.sub_title}</h1>
                    <p className='product-title-container-content-p'>
                    {
                      desc.length > 0 && desc.map((e, index ) => {
                        if(index == desc.length - 1)
                          return <span key={index}>{e}</span>
                        else
                          return <span key={index}>{e}<br/></span>
                      })
                    }
                    </p>
                  </div>
                </div>
              </div>
	            <div className='product-function'>
                <div className='product-function-word'>
                  <div className='product-function-word-wrapper'>
                    <h1 className='product-function-word-wrapper-title'>{data.challenge.title}</h1>
                    <p className='product-function-word-wrapper-content'>{data.challenge.content}</p>
                  </div>
                </div>
                <div className='product-function-photo'>
                  <img src={data.challenge.image} />
                </div>
              </div>
	            <div className='product-function'>
                <div className='product-function-photo'>
                  <img src={data.solution.image} />
                </div>
                <div className='product-function-word'>
                  <div className='product-function-word-wrapper'>
                    <h1 className='product-function-word-wrapper-title'>{data.solution.title}</h1>
                    <p className='product-function-word-wrapper-content'>{data.solution.content}</p>
                  </div>
                </div>                
              </div>
              <div className='product-content'>
                <div className='product-content-title'>
                  <h1 className='product-content-title-petal'>{data.techincal.title}</h1>
                </div>
                <div className='product-content-advantage'>
                  {
                    data.techincal.advantage && data.techincal.advantage.map((data, index) =>
                      <Advantage data={data} key={`${index}-data-img-1`} />
                    )
                  }
                </div>
              </div>
              <div className='product-questions'>
                <div className='product-questions-title'>
                  <h1 className='product-questions-title-petal'>
                    {data.questions.title}
                    <Link className='product-questions-title-link' to={data.questions.route}>
                      {data.questions.title_link}  
                    </Link>
                  </h1>
                </div>
              </div>
              <div className='product-middle'>
                <div className='product-middle-title'>
                  <h1 className='product-middle-title-petal'>{data.middle.title}</h1>
                </div>
                <div className='product-middle-list'>
                  {
                    data.middle.content && data.middle.content.map((data, index) =>
                      <Middle data={data} key={`${index}-data-img-1`} />
                    )
                  }
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
                  <img src={data.video.image} />
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
                url={'https://player.vimeo.com/video/326706504'}
                controls={true}
                playing={false}
                width='100%'
                height='100%'
              />
            </ReactModal>
          </div>          
        }        
      </article>
    );
  }
}

Product.propTypes = {
  
};
