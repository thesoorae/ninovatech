import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './css/app.css';
import Header from './components/header';
import Home from './components/home';
import Technologies from './components/technologies';
import Products from './components/products';
import Patents from './components/patents';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          {this.props.children}
          </div>
        <div className="footer" />
      </div>
    );
  }
}

export default App;
