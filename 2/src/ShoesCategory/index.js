import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';
import Sidebar from './Sidebar';
import Content from './Content';

export default () => {
  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
}
