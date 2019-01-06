import React, {
  Component
} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header/index'
import Home from './pages/Home'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <>
          <Header />
          <BrowserRouter>
            <>
              <Route path='/' exact component={Home}></Route>
            </>
          </BrowserRouter>
        </>
      </Provider>
    );
  }
}

export default App;