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
import Space from './Space';

const mapDispatchToProps = (dispatch) => ({
  
});

const mapStateToProps = createStructuredSelector({
  
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'space', reducer });
const withSaga = injectSaga({ key: 'space', saga });

export default compose(withReducer, withSaga, withConnect)(Space);
export { mapDispatchToProps };
