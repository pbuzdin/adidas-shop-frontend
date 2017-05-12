import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';

export default () => {
  return (
    <div className="ShoesCategory">
      <div className="container">
        <div className="sidebar">
          <div className="logo">
            <img src={require("./img/logo.png")} className="logo-img" alt="" />
          </div>
          <div className="search">
            <form>
              <label>
                <img src={require("./img/search-icon.svg")} className="search-icon" alt="" />
                <input type="input" />
              </label>
            </form>
          </div>
          <div className="nav">
            <a href="#" className="category active">sports</a>
            <div>
              <a href="#" className="subcategory active">shoes</a>
              <a href="#" className="subcategory">clothing</a>
              <a href="#" className="subcategory">accesories</a>
            </div>

            <a href="#" className="category">brands</a>
            <a href="#" className="category">micoach</a>
          </div>
        </div>

        <div className="products">
          <div className="filter row">
            <div className="gender col4">
              <img src={require("./img/filter.png")} className="filter-icon" alt="" />
              <div className="gender-switch">
                <button className="active">Man</button>
                <button>Woman</button>
              </div>
            </div>
            <div className="sizes col8">
              <span className="size-title">size</span>
              <div className="size-line">
                <button>36</button><button>37</button><button>38</button><button>39</button><button>40</button><button className="active">41</button><button>42</button>
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
      </div>

    </div>
  );
}
