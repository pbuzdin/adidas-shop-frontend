import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './style.css';
import Filter from './Filter';
import Card from './Card';
import List from './List';
import Details from './Details';

export default () => {
  return (
    <Router>
      <div className="content">
        <Route exact path="/" component={List} />
        <Route path="/item" component={Details} />
      </div>
    </Router>
  );
}
