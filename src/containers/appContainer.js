import App from '../App';
import {connect} from 'react-redux';
import {add, addNum} from '../actions/countActions';
import {showAlert, hideAlert} from '../actions/alertActions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  counter: state.count.counter,
  alert: state.alert,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  add,
  addNum,
  showAlert,
  hideAlert,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
