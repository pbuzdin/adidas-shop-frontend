import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';
import Filter from './Filter';

export default () => {
  return (
    <div className="content">
      <Filter />

      <div className="products-grid row">
        <div className="col4">
          <div className="product sale">
            <span className="sale-badge">sale</span>
            <div className="product-img">
              <img src={require("./img/product1.jpg")} alt="" />
            </div>
            <a href="#" className="price">170$</a>
          </div>
        </div>
        <div className="col4">
          <div className="product sale">
            <span className="sale-badge">sale</span>
            <div className="product-img">
              <img src={require("./img/product2.jpg")} alt="" />
            </div>
            <a href="#" className="price">230$</a>
          </div>
        </div>
        <div className="col4">
          <div className="product sale">
            <span className="sale-badge">sale</span>
            <div className="product-img">
              <img src={require("./img/product3.jpg")} alt="" />
            </div>
            <a href="#" className="price">190$</a>
          </div>
        </div>
      </div>

      <div className="products-grid row">
        <div className="col4">
          <div className="product">
            <span className="sale-badge">sale</span>
            <div className="product-img">
              <img src={require("./img/product2.jpg")} alt="" />
            </div>
            <a href="#" className="price">170$</a>
          </div>
        </div>
        <div className="col4">
          <div className="product">
            <span className="sale-badge">sale</span>
            <div className="product-img">
              <img src={require("./img/product3.jpg")} alt="" />
            </div>
            <a href="#" className="price">230$</a>
          </div>
        </div>
        <div className="col4">
          <div className="product">
            <span className="sale-badge">sale</span>
            <div className="product-img">
              <img src={require("./img/product1.jpg")} alt="" />
            </div>
            <a href="#" className="price">190$</a>
          </div>
        </div>
      </div>

      <div className="products-grid row">
        <div className="col4">
          <div className="product sale">
            <span className="sale-badge">sale</span>
            <div className="product-img">
              <img src={require("./img/product1.jpg")} alt="" />
            </div>
            <a href="#" className="price">170$</a>
          </div>
        </div>
        <div className="col4">
          <div className="product sale ">
            <span className="sale-badge">sale</span>
            <div className="product-img">
              <img src={require("./img/product2.jpg")} alt="" />
            </div>
            <a href="#" className="price">230$</a>
          </div>
        </div>
        <div className="col4">
          <div className="product sale">
            <span className="sale-badge">sale</span>
            <div className="product-img">
              <img src={require("./img/product3.jpg")} alt="" />
            </div>
            <a href="#" className="price">190$</a>
          </div>
        </div>
      </div>
    </div>
  );
}
