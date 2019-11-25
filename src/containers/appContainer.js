import App from '../App';
import {connect} from 'react-redux';
import {add, addNum} from '../actions/countActions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  counter: state.count.counter,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  add,
  addNum,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
