import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './style.css';
import './Content/style.css';
import Sidebar from './Sidebar';
import List from './Content/List';
import Details from './Content/Details';

export default () => {
  return (
    <Router>
      <div className="container1">
        <Sidebar />
        <div className="content">
          <Route exact path="/" component={List} />
          <Route path="/item" component={Details} />
        </div>
      </div>
    </Router>
  );
}
