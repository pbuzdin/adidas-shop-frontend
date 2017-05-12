import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';
import SaleBadge from './SaleBadge';

const FilterSelect = (props) => (
  <button>{props.children}</button>
)

export default () => {
  return (
    <div className="col4">
      <div className="product sale">
        <SaleBadge />
        <div className="product-img">
          <img src={require("./img/product1.jpg")} alt="" />
        </div>
        <a href="#" className="price">170$</a>
      </div>
    </div>
  );
}