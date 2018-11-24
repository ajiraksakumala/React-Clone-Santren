import React, { Component } from 'react';
import Home from './counter/Home';
import Mondok from './counter/Mondok';
import Kitab from './counter/Kitab';
import Kajian from './counter/Kajian';
import Header from './components/Header';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    page : 'Home'
  }

  handlePage = (param) => {
    this.setState({
      page : param
    });
  }

  render() {
    return(
    <div>
      <Header link={ this.handlePage }/>
    {this.state.page == 'Home' ? (<Home />) : this.state.page == 'Kajian' ? (<Kajian />) : this.state.page == 'Mondok' ? (<Mondok />) : this.state.page == 'Kitab' ? (<Kitab />) : "<h1>Page Not Found</h1>"}
    </div>
    );
  }
}

export default App;
