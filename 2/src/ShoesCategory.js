import React from 'react';
//import ReactDOM from 'react-dom';
import './ShoesCategory.css';

export default () => {
    return (
      <div className="ShoesCategory">
      <div className="container">
        <div className="sidebar">
          <div className="logo">
            <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/logo.png" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/logo@2x.png 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/logo@3x.png 3x" className="logo-img" alt="" />
          </div>
          <div className="search">
            <form>
              <label>
                <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/search-icon.svg" className="search-icon" alt="" />
                  <input type="input" />
              </label>
            </form>
          </div>
              <div className="nav">
                <a href="#" className="category active">sports</a>
                <div>
                  <a href="http://dev.iboong.com/adidas-shop-frontend/1/" className="subcategory active">shoes</a>
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
                  <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/filter.png" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/filter@2x.png 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/filter@3x.png 3x" className="filter-icon" alt="" />
                  <div className="gender-switch">
                    <button className="active">Man</button>
                    <button>Woman</button>
                  </div>
                </div>
                <div className="sizes col8">
                  <span className="size-title">size</span>
                  <div className="size-line">
                    <a href="#">36</a>
                    <a href="#">37</a>
                    <a href="#">38</a>
                    <a href="#">39</a>
                    <a href="#">40</a>
                    <a href="#" className="active">41</a>
                    <a href="#">42</a>
                  </div>
                </div>
              </div>

              <div className="products-grid row">
                <div className="col4">
                  <div className="product sale">
                    <span className="sale-badge">sale</span>
                    <div className="product-img">
                      <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/product1.jpg" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/product1@2x.jpg 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/product1@3x.jpg 3x" alt="" />
                    </div>
                    <a href="#" className="price">170$</a>
                  </div>
                </div>
                <div className="col4">
                  <div className="product sale">
                    <span className="sale-badge">sale</span>
                    <div className="product-img">
                      <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/product2.jpg" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/product2@2x.jpg 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/product2@3x.jpg 3x" alt="" />
                    </div>
                    <a href="#" className="price">230$</a>
                  </div>
                </div>
                <div className="col4">
                  <div className="product sale">
                    <span className="sale-badge">sale</span>
                    <div className="product-img">
                      <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/product3.jpg" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/product3@2x.jpg 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/product3@3x.jpg 3x" alt="" />
                    </div>
                    <a href="http://dev.iboong.com/adidas-shop-frontend/1/product3/" className="price">190$</a>
                  </div>
                </div>
              </div>

              <div className="products-grid row">
                <div className="col4">
                  <div className="product">
                    <span className="sale-badge">sale</span>
                    <div className="product-img">
                      <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/product2.jpg" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/product2@2x.jpg 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/product2@3x.jpg 3x" alt="" />
                    </div>
                    <a href="#" className="price">170$</a>
                  </div>
                </div>
                <div className="col4">
                  <div className="product">
                    <span className="sale-badge">sale</span>
                    <div className="product-img">
                      <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/product3.jpg" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/product3@2x.jpg 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/product3@3x.jpg 3x" alt="" />
                    </div>
                    <a href="#" className="price">230$</a>
                  </div>
                </div>
                <div className="col4">
                  <div className="product">
                    <span className="sale-badge">sale</span>
                    <div className="product-img">
                      <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/product1.jpg" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/product1@2x.jpg 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/product1@3x.jpg 3x" alt="" />
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
                      <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/product1.jpg" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/product1@2x.jpg 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/product1@3x.jpg 3x" alt="" />
                    </div>
                    <a href="#" className="price">170$</a>
                  </div>
                </div>
                <div className="col4">
                  <div className="product sale ">
                    <span className="sale-badge">sale</span>
                    <div className="product-img">
                      <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/product2.jpg" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/product2@2x.jpg 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/product2@3x.jpg 3x" alt="" />
                    </div>
                    <a href="#" className="price">230$</a>
                  </div>
                </div>
                <div className="col4">
                  <div className="product sale">
                    <span className="sale-badge">sale</span>
                    <div className="product-img">
                      <img src="http://dev.iboong.com/adidas-shop-frontend/1/img/product3.jpg" srcSet="http://dev.iboong.com/adidas-shop-frontend/1/img/product3@2x.jpg 2x, http://dev.iboong.com/adidas-shop-frontend/1/img/product3@3x.jpg 3x" alt="" />
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
