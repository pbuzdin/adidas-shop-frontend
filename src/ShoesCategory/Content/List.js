import React from 'react';
import Filter from './Filter';
import Card from './Card';

export default () => {
  return (
    <div>
      <Filter />
      <div className="products-grid row">
        <div className="col-xs-4">
          <Card />
        </div>
        <div className="col-xs-4">
          <Card />
        </div>
        <div className="col-xs-4">
          <Card />
        </div>
      </div>
      <div className="products-grid row">
        <div className="col-xs-4">
          <Card />
        </div>
        <div className="col-xs-4">
          <Card />
        </div>
        <div className="col-xs-4">
          <Card />
        </div>
      </div>
      <div className="products-grid row">
        <div className="col-xs-4">
          <Card />
        </div>
        <div className="col-xs-4">
          <Card />
        </div>
        <div className="col-xs-4">
          <Card />
        </div>
      </div>
    </div>
  );
}
