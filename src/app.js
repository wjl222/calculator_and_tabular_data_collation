import React, { Component,  } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/index';

import { Gloablstyle } from './style';

import Form from "./pages/form";
import Cal from './pages/calculator'
import Header from './com/header';
import NavCon from './com/nav'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>

          <Gloablstyle />
          <Header />
          <BrowserRouter>
            <NavCon />
            <Route path='/dataAnalysis' exact component={Form} />
            <Route path='/' exact component={Cal} />
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;