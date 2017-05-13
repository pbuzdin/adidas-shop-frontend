import React from 'react';

export default () => {
  return (
    <div className="product-info sale">
      <div className="product-container">
        <div className="hover">

          <div className="left-info">
            <h1 className="product-title">Ultra<br />Boost</h1>
            <button className="save">save</button>
          </div>

          <div className="right-info">
            <button className="color-switch color1"></button>
            <button className="color-switch color2"></button>
            <button className="color-switch color3"></button>
            <button className="color-switch color4"></button>
            <span className="sale-badge">sale</span>
            <h2 className="price">170$</h2>
          </div>

        </div>

        <img src="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-4.jpg" srcset="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-4@2x.jpg 2x, 
          http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-4@3x.jpg 3x" className="photo-show" />

        <div className="photo-tour">
          <img src="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-1.jpg" srcset="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-1@2x.jpg 2x, 
            http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-1@3x.jpg 3x" className="photo-thumb" />

          <img src="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-2.jpg" srcset="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-2@2x.jpg 2x, 
            http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-2@3x.jpg 3x" className="photo-thumb" />

          <img src="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-3.jpg" srcset="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-3@2x.jpg 2x, 
            http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-3@3x.jpg 3x" className="photo-thumb" />

          <img src="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-4.jpg" srcset="http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-4@2x.jpg 2x, 
            http://dev.iboong.com/adidas-shop-frontend/1/product3/img/product3-4@3x.jpg 3x" className="photo-thumb current" />

          <div className="triple"></div>
          <a href="#" className="more-photos">see more photos</a>

        </div>

        <p className="product-desc"><a href="#">Adidas</a> is a German multinational corporation,<br />headquartered in Herzogenaurach, Germany, that
                    designs<br />and manufactures shoes, clothing and accessories.</p>

      </div>
      <button className="buy">buy now</button>
    </div>
  );
}
