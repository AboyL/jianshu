import React, {
  Component
} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header/index'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <>
          <BrowserRouter>
            <>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
              <Route path='/Login' exact component={Login}></Route>
            </>
          </BrowserRouter>
        </>
      </Provider>
    );
  }
}

export default App;