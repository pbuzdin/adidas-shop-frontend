import React from 'react';
import './style.css';
import Filter from './Filter';
import Card from './Card';

export default () => {
  return (
    <div className="content">
      <Filter />
      <div className="products-grid row">
        <div className="col4">
          <Card />
        </div>
        <div className="col4">
          <Card />
        </div>
        <div className="col4">
          <Card />
        </div>
      </div>
      <div className="products-grid row">
        <div className="col4">
          <Card />
        </div>
        <div className="col4">
          <Card />
        </div>
        <div className="col4">
          <Card />
        </div>
      </div>
      <div className="products-grid row">
        <div className="col4">
          <Card />
        </div>
        <div className="col4">
          <Card />
        </div>
        <div className="col4">
          <Card />
        </div>
      </div>
    </div>
  );
}
