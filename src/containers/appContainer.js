import App from '../App';
import {connect} from 'react-redux';
import {showAlert, hideAlert} from '../actions/alertActions';
import {getUsers, clearUsers, getUser, getRepos} from '../actions/githubActions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  alert: state.alert,
  github: state.github,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  showAlert,
  hideAlert,
  getUsers,
  clearUsers,
  getUser,
  getRepos,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
