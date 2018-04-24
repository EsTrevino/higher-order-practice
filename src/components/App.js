import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';


import Header from './Header';
import Resources from './Resources';


class App extends Component {
  render(){
    return(
      <div className="container">
        <Header />
        <Route path="/resources" component={Resources} />
      </div>
    )
  }
}

export default App;
