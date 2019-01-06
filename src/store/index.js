import { createStore, compose,applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducer'

// export default createStore(reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...[ReduxThunk])
));
export default store