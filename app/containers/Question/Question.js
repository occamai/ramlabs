
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import data_1_a from '../../images/contact-bg.jpg';
import data_1_b from '../../images/map.png';

export default class Question extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      anwser_1: '',
      anwser_2: '',
      anwser_2_dec: '',
      anwser_3: '',
      anwser_3_dec: '',
      anwser_4: '',
      anwser_4_dec: '',
      anwser_5: '',
      anwser_5_dec: '',
      anwser_6: '',
      anwser_6_dec: '',
      anwser_7: '',
      anwser_7_dec: '',
    };
  }

  handleQuestionChange1 = (e) => this.setState({anwser_1: e.target.value})
  handleQuestionChange2 = (e) => this.setState({anwser_2: e.target.value})
  handleQuestionChange3 = (e) => this.setState({anwser_3: e.target.value})
  handleQuestionChange4 = (e) => this.setState({anwser_4: e.target.value})
  handleQuestionChange5 = (e) => this.setState({anwser_5: e.target.value})
  handleQuestionChange6 = (e) => this.setState({anwser_6: e.target.value})

  componentDidMount() {
    // this.props.match.params.slug
  }

  render() {
    
    return (
      <article>
        <Helmet>
          <title>Question</title>
          <meta name='description' content='Ramlabs Question' />
        </Helmet>
        <div className='question'>
          <div className='question-top'>
            <img src={data_1_a}/>
            <div className='question-top-container'>
              <div className='row justify-content-center'>
                <div className='overlay col-md-8'>                
                  <TextField
                    label='Name'
                    className='input'
                    margin='normal'
                  />
                  <TextField
                    label='Company'
                    className='input'
                    margin='normal'
                  />
                  <TextField
                    label='Contact Information (email)'
                    className='input'
                    type='email'
                    margin='normal'
                  />
                  <TextField
                    label='Your Title'
                    className='input'
                    margin='normal'
                  />
                  {
                    this.props.match.params.slug == 'drugdiscovery' && 
                    <div>
                      <div className='question-top-container-q'>
                        <FormLabel component='label' className='label'>Do you current use similarity search for molecule search?</FormLabel>
                        <RadioGroup
                          row
                          aria-label='gender'
                          value={this.state.anwser_1}
                          onChange={this.handleQuestionChange1}
                        >
                          <FormControlLabel value='yes' control={<Radio />} label='Yes'/>
                          <FormControlLabel value='no' control={<Radio />} label='No' />
                          <FormControlLabel value='not_sure' control={<Radio />} label='Not sure' />
                        </RadioGroup>
                      </div>
                      <div className='question-top-container-q'>
                        <FormLabel component='label' className='label'>Do you use an application for molecule search such as KNIME or BIOVIA Pipeline Pilot?</FormLabel>
                        <RadioGroup
                          row
                          aria-label='gender'
                          value={this.state.anwser_2}
                          onChange={this.handleQuestionChange2}
                        >
                          <FormControlLabel value='no' control={<Radio />} label='No' />
                          <FormControlLabel value='yes' control={<Radio />} label='Yes, I use' className='m-l-10'/>
                          <TextField
                            className='input_radio'
                            margin='normal'
                            onChange={(anwser_2_dec) => this.setState({anwser_2_dec})}
                            disabled={this.state.anwser_2 == 'yes' ? false : true}
                          />
                        </RadioGroup>
                      </div>
                      <div className='question-top-container-q'>
                        <FormLabel component='label' className='label'>Do you know the current size of your database?</FormLabel>
                        <RadioGroup
                          row
                          aria-label='gender'
                          value={this.state.anwser_3}
                          onChange={this.handleQuestionChange3}
                        >
                          <FormControlLabel value='no' control={<Radio />} label="I don't know" />
                          <FormControlLabel value='yes' control={<Radio />} label="Yes, It's" className='m-l-10'/>
                          <TextField
                            className='input_radio'
                            margin='normal'
                            disabled={this.state.anwser_3 == 'yes' ? false : true}
                            onChange={(anwser_3_dec) => this.setState({anwser_3_dec})}
                          />
                        </RadioGroup>
                      </div>
                      <div className='question-top-container-q'>
                        <FormLabel component='label' className='label'>Do you know the size of your molecule fingerprints?</FormLabel>
                        <RadioGroup
                          row
                          aria-label='gender'
                          value={this.state.anwser_4}
                          onChange={this.handleQuestionChange4}
                        >
                          <FormControlLabel value='no' control={<Radio />} label="I don't know" />
                          <FormControlLabel value='yes' control={<Radio />} label="Yes, It's" className='m-l-10'/>
                          <TextField
                            className='input_radio'
                            margin='normal'
                            disabled={this.state.anwser_4 == 'yes' ? false : true}
                            onChange={(anwser_4_dec) => this.setState({anwser_4_dec})}
                          />
                        </RadioGroup>
                      </div>
                      <div className='question-top-container-q'>
                        <FormLabel component='label' className='label'>Do you have latency requirements?</FormLabel>
                        <RadioGroup
                          row
                          aria-label='gender'
                          value={this.state.anwser_5}
                          onChange={this.handleQuestionChange5}
                        >
                          <FormControlLabel value='no' control={<Radio />} label="No" />
                          <FormControlLabel value='yes' control={<Radio />} label="Yes, It's" className='m-l-10'/>
                          <TextField
                            className='input_radio'
                            margin='normal'
                            disabled={this.state.anwser_5 == 'yes' ? false : true}
                            onChange={(anwser_5_dec) => this.setState({anwser_5_dec})}
                          />
                        </RadioGroup>
                      </div>
                      <div className='question-top-container-q'>
                        <FormLabel component='label' className='label'>Do you have batch requirements?</FormLabel>
                        <RadioGroup
                          row
                          aria-label='gender'
                          value={this.state.anwser_6}
                          onChange={this.handleQuestionChange6}
                        >
                          <FormControlLabel value='no' control={<Radio />} label="No" />
                          <FormControlLabel value='yes' control={<Radio />} label="Yes, It's" className='m-l-10'/>
                          <TextField
                            className='input_radio'
                            margin='normal'
                            disabled={this.state.anwser_6 == 'yes' ? false : true}
                            onChange={(anwser_6_dec) => this.setState({anwser_6_dec})}
                          />
                        </RadioGroup>
                      </div>
                      <div className='question-top-container-q'>
                        <FormLabel component='label' className='label'>Is there anything else you want to add?</FormLabel>
                        <TextField
                            className='text_area'
                            margin='normal'
                            multiline
                            aria-label="minimum height"
                            rowsMax='5'
                            onChange={(anwser_7_dec) => this.setState({anwser_7_dec})}
                          />
                      </div>
                    </div>
                  }
                  
                  <div className='question-top-container-button'>
                    <div className='question-top-container-button-content'>
                      <span>Send</span><FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='question-map'>
            <div className='question-map-container'>
              <h3>Locations</h3>
              <img src={data_1_b}/>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

Question.propTypes = {
  
};
