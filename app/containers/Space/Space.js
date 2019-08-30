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
import Logo from 'components/Logo';
import { DATA_1 } from './data';
import './style.scss';
import data_1_a from '../../images/space_logo.png';

export default class Space extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {    
    return (
      <article>
        <Helmet>
          <title>Space</title>
          <meta name='description' content='Ramlabs Space' />
        </Helmet>
        <div className='space'>
          <div className='space-header'>
            <div className='color-overlay'></div>
            <div className='space-header-content'>
              <div className='space-header-content-inner'>
                <div className='space-header-content-inner-container'>
                  <Link className='space-header-content-inner-container-link' to='/space'>
                    <img src={data_1_a} title={'SpaceNet'} alt={'SpaceNet'} />
                  </Link>
                  <h1 className='space-header-content-inner-container-title'>SpaceNet Challenge 5</h1>
                  <h3 className='space-header-content-inner-container-description'>Automated Road Network Extraction, Routing, and Travel Time Estimation from Satellite Imagery</h3>
                  <div className='space-header-content-inner-container-btn'>
                    <Link className='space-header-content-inner-container-btn-link' to='/space'>
                      <p>Register Now!</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='space-service'>
            <div className='space-service-content'>
              <p className='space-service-content-description'>SpaceNet LLC is a nonprofit organization dedicated to accelerating open source, artificial intelligence applied research for geospatial applications, specifically foundational mapping. SpaceNet is run in collaboration with CosmiQ Works, Maxar Technologies, Intel AI, Amazon Web Services (AWS), and Capella Space.</p>
              <div className='space-service-content-line'></div>
              <div className='space-service-content-logo'>
                <div className='row'>
                  {
                    DATA_1.map((data, index) =>
                      <div className='col-data-2' key={`${index}-data-1`}>
                        <Logo data = {data}/>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='space-objective'>
            <div className='color-overlay'></div>
            <div className='space-objective-content'>
              <div className='space-objective-content-inner'>
                <h1 className='space-objective-content-inner-title'> SPACENET 5 OBJECTIVE </h1>
                <div className='space-objective-content-inner-line'></div>
                <div className='space-objective-content-inner-container'>
                  <p className='m-t-60'><b>Challenge Overview</b></p>
                  <p>Determining optimal routing paths in near real-time is at the heart of many humanitarian, civil, military, and commercial challenges. This statement is as true today as it was two years ago when the SpaceNet Partners announced SpaceNet Challenge 3 focused on road network detection and routing (Announcement and Challenge Results)(Note: links to the SpaceNet 3 data sets and code for winning open-source models can be found at www.spacenet.ai). In a disaster response scenario, for example, pre-existing foundational maps are often rendered useless due to debris, flooding, or other obstructions. Satellite or aerial imagery often provides the first large-scale data in such scenarios, rendering such imagery attractive. This challenge seeks to build upon the advances from SpaceNet 3 and by challenging challenge participants to automatically extract road networks and routing information from satellite imagery, along with travel time estimates along all roadways, thereby permitting true optimal routing.</p>
                  <p className='m-t-30'>Your task will be to output a detailed graph structure with edges corresponding to roadways and nodes corresponding to intersections and end points, with estimates for route travel times on all detected edges. </p>
                  <p className='m-t-30'>SpaceNet will be open sourcing new data sets for the following cities: Moscow, Russia; Mumbai, India; and San Juan, Puerto Rico. For the first time in SpaceNet history, the final submissions will be tested on a mystery city data set that be revealed and open sourced at the end of the Challenge!</p>
                  <p className='m-t-60'><b>Evaluation Metric</b></p>
                  <p>In building off of the results from SpaceNet 3, this challenge will use a modified version of the Average Path Length Similarity (APLS) metric that is tuned to optimize travel times between nodes of interest. CosmiQ Works’ blog, The DownLinQ, provides additional information including an APLS metric overview and detailed description of SpaceNet 5 motivation and structure.</p>
                  <p className='m-t-60'><b>Algorithmic Baseline</b></p>
                  <p>The algorithmic baseline for this Challenge is available at this Github link. An explanation of the baseline model, City Scale Road Extraction from Satellite Imagery v2 (CRESIv2), its performance results, and instructions on how to scale automated analysis to large images can be found here.</p>
                </div>
                <h1 className='space-objective-content-inner-title'> WHY FOUNDATIONAL MAPPING MATTERS </h1>
                <div className='space-objective-content-inner-line'></div>
                <div className='space-objective-content-inner-container'>
                  <p>The commercialization of the geospatial industry has led to an explosive amount of data being collected to characterize our changing planet. One area for innovation is the application of computer vision and deep learning to automatically extract information from satellite imagery at scale. Today, map features such as roads, building footprints, and points of interest are primarily created through manual techniques. SpaceNet believes that advancing automated feature extraction techniques will serve important downstream uses of map data, including humanitarian and disaster response. Furthermore, solving foundational mapping challenges are an important stepping stone to unleashing the power of advanced computer vision algorithms applied to a variety of remote sensing data applications.</p>                  
                </div>
              </div>
            </div>
          </div>
          <div className='space-challenge'>
            <div className='color-overlay'></div>
            <div className='space-challenge-content'>
              <div className='space-challenge-content-inner'>
                <div className='space-challenge-content-inner-container'>
                  <h1>$50,000</h1>
                  <p>In Total Challenge Prizes</p>
                </div>
              </div>
            </div>
          </div>
          <div className='space-timeline'>
            <div className='space-timeline-content'>
              <div className='space-timeline-content-inner'>
                <h1>SpaceNet Challenge 5 Timeline</h1>
                <p>* Timeline subject to slight changes throughout course of challenge</p>
                <div className='row p-b-30 div-position'>
                  <div className='col-md-3 div-flex'>
                    <div className='circle-deactive'></div>
                    <h5>Challenge Begins!</h5>
                    <div className='circle'></div>
                    <h6>9/3/19</h6>
                  </div>
                  <div className='col-md-3 div-flex'>
                    <div className='circle-deactive'></div>
                    <h5>Midpoint Check-in!</h5>
                    <div className='circle'></div>
                    <h6>9/27/19</h6>
                  </div>
                  <div className='col-md-3 div-flex'>
                    <div className='circle-deactive'></div>
                    <h5>Challenge Ends!</h5>
                    <div className='circle'></div>
                    <h6>10/25/19</h6>
                  </div>
                  <div className='col-md-3 div-flex'>
                    <div className='circle-deactive'></div>
                    <h5>Winners Announced!</h5>
                    <div className='circle'></div>
                    <h6>11/8/19</h6>
                  </div>
                  <div className='space-timeline-content-inner-line'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='space-skill'>
            <div className='color-overlay'></div>
            <div className='space-skill-content'>
              <div className='space-skill-content-inner'>
                <h1>Put Your Skills to the Test and Create Leading Geospatial Computer Vision Models Using One of the Leading Open Source Data Sets</h1>
                <div className='space-skill-content-inner-btn'>
                  <Link className='space-skill-content-inner-btn-link' to='/space'>
                    <p>Register Now!</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

Space.propTypes = {
  
};
