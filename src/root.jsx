import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import Home from './components/home.jsx';
import Technologies from './components/technologies';
import Products from './components/products';
import Patents from './components/patents';
import Publications from './components/publications';
import Photos from './components/photos';
import Bio from './components/bio';

const Root = () => (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component ={Home} />
      <Route path="/technologies" component={Technologies}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/patents" component={Patents}></Route>
      <Route path="/publications" component={Publications}></Route>
      <Route path="/photos" component={Photos}></Route>
      <Route path="/bio" component={Bio}></Route>
    </Route>
  </Router>
);

export default Root;
