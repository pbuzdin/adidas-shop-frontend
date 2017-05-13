import React from 'react';
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
