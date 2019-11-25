import App from '../App';
import {connect} from 'react-redux';
import {add, addNum} from '../actions/countActions';
import {showAlert, hideAlert} from '../actions/alertActions';
import {getUsers} from '../actions/githubActions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  counter: state.count.counter,
  alert: state.alert,
  github: state.github,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  add,
  addNum,
  showAlert,
  hideAlert,
  getUsers,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
