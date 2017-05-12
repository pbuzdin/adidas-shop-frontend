import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';
import Filter from './Filter';
import Card from './Card';

export default () => {
  return (
    <div className="content">
      <Filter />
      <div className="products-grid row">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="products-grid row">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="products-grid row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
