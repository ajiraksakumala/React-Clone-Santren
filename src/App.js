import React, { Component } from 'react';
import Home from './counter/Home';
import Mondok from './counter/Mondok';
import Kitab from './counter/Kitab';
import Kajian from './counter/Kajian';
import NotFound from './counter/NotFound';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return(
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Kajian" component={Kajian} />
        <Route path="/Mondok" component={Mondok} />
        <Route path="/Kitab" component={Mondok} />
        <Route component={NotFound} />
      </Switch>
    </div>
    );
  }
}

export default App;
