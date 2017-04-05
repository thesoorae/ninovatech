import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          {this.props.children}
        <div className="footer" />
      </div>
    );
  }
}

export default App;
