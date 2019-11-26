import {Search} from '../components/Search/Search';
import {connect} from 'react-redux';
import {showAlert, hideAlert} from '../actions/alertActions';
import {getUsers, clearUsers} from '../actions/githubActions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  alert: state.alert,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  showAlert,
  hideAlert,
  getUsers,
  clearUsers,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
