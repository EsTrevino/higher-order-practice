import React, {Component} from 'react';
import {Route} from 'react-router-dom';


import Header from './Header';
import Resources from './Resources';
import requireAuth from './higherOrderComponents/require_auth';


class App extends Component {
  render(){
    return(
      <div className="container">
        <Header />
        <Route path="/resources" component={requireAuth(Resources)} />
      </div>
    )
  }
}

export default App;
