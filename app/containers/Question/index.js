import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { } from '../App/actions';
import { } from './actions';
import { } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Question from './Question';

const mapDispatchToProps = (dispatch) => ({
  
});

const mapStateToProps = createStructuredSelector({
  
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'question', reducer });
const withSaga = injectSaga({ key: 'question', saga });


export default compose(withReducer, withSaga, withConnect)(Question);
export { mapDispatchToProps };
