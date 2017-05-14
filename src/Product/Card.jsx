import React from 'react';
import Badge from '../Badge';
import './style.css';

export default () => (
  <div className="product sale">
    <Badge />
    <div className="product-img">
      <img src={require('./img/product1.jpg')} alt="" />
    </div>
    <a href="/item" className="price">170$</a>
  </div>
);
