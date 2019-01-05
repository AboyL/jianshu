import { createStore, compose } from 'redux'
import reducer from './reducer'

// export default createStore(reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());
export default store