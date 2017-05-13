import React from 'react';
import Badge from './Badge';
import './style.css';

const FilterSelect = (props) => (
  <button>{props.children}</button>
)

export default () => {
  return (
    <div className="product sale">
      <Badge />
      <div className="product-img">
        <img src={require("./img/product1.jpg")} alt="" />
      </div>
      <a href="#" className="price">170$</a>
    </div>
  );
}