import {connect} from 'react-redux';
import Search from '../components/Search/Search';
import {showAlert, hideAlert} from '../actions/alertActions';
import {getUsers, clearUsers} from '../actions/githubActions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  alert: state.alert,
});
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  showAlert,
  hideAlert,
  getUsers,
  clearUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
