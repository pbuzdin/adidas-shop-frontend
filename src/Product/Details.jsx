import React from 'react';
import Badge from '../Badge';
import './style.css';

const ProductName = props => (
  <h1 className="product-title">{props.children}</h1>
);
const BtnRound = props => <button className="save">{props.children}</button>;
const SwitchColor = props => (
  <button className={`color-switch ${props.color}`} />
);
const Price = props => <h2 className="price">{props.children}</h2>;
const ProductDesc = props => <p className="product-desc">{props.children}</p>;
const BtnLarge = props => <button className="buy">{props.children}</button>;

export default () => (
  <div className="product-info sale">
    <div className="product-container">
      <div className="hover">

        <div className="left-info">
          <ProductName>Ultra Boost</ProductName>
          <BtnRound>save</BtnRound>
        </div>

        <div className="right-info">
          <SwitchColor color="color1" />
          <SwitchColor color="color2" />
          <SwitchColor color="color3" />
          <SwitchColor color="color4" />
          <Badge />
          <Price>170$</Price>
        </div>

      </div>

      <img
        src={require('./img/product3-4.jpg')}
        className="photo-show"
        alt=""
      />

      <div className="photo-tour">
        <img
          src={require('./img/product3-1.jpg')}
          className="photo-thumb"
          alt=""
        />
        <img
          src={require('./img/product3-2.jpg')}
          className="photo-thumb"
          alt=""
        />
        <img
          src={require('./img/product3-3.jpg')}
          className="photo-thumb"
          alt=""
        />
        <img
          src={require('./img/product3-4.jpg')}
          className="photo-thumb current"
          alt=""
        />
        <div className="triple" />
        <a href="#test" className="more-photos">see more photos</a>

      </div>

      <ProductDesc>
        <a href="#test">Adidas</a>
        {' '}
        is a German multinational corporation,
        <br />
        headquartered in Herzogenaurach, Germany, that
        designs<br />and manufactures shoes, clothing and accessories.
      </ProductDesc>

    </div>
    <BtnLarge>buy now</BtnLarge>
  </div>
);
