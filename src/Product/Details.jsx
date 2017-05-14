import React from 'react';
import styled from 'styled-components';
import Badge from '../Badge';

const Product = styled.div`
  background: #fff;
  margin-top: 26px;
  padding-left: 26px;
  float: left;
  width: 60%;
  min-width: 1025px;
  position: relative;
`;
const InfoLeft = styled.div`
  position: absolute;
`;
const InfoRight = styled.div`
  position: absolute;
  right: 0;
  > .sale-badge {
    float: right;
    position: relative;
    margin-left: 30px;
  }
`;
const ProductName = styled.div`
  font-family: 'AvenirNext', Arial;
  font-weight: bold;
  font-size: 64px;
  line-height: 1;
  color: #3a3a3a;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  max-width: 230px;
`;
const BtnRound = styled.button`
  background: #e3e3e3;
  border-radius: 75px;
  width: 75px;
  height: 75px;
  border: 0;
  color: #fff;
  font-family: 'AvenirNext', Arial;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 14px;
`;
const SwitchColor = styled.div`
  display: inline-block;
  margin-top: 6px;
  > button {
    width: 18px;
    height: 18px;
    border-radius: 18px;
    border: 0;
    padding: 4px;
    margin-left: 13px;
    cursor: pointer;
    background: #c5c5c5;
  }
  & button.color1 {
    background: #c5c5c5;
  }
  & button.color2 {
    background: #4d87ca;
  }
  & button.color3 {
    background: #4a4a4a;
  }
  & button.color4 {
    background: #e0e0e0;
  }
`;
const ProductPhotos = styled.div`
  height: 120px;
  overflow: hidden;
  > img {
    max-height: 120px;
    border: 5px solid transparent;
    cursor: pointer;
  }
  > img.current {
    border: 5px solid #e8e8ea;
  }
`;
const Triple = styled.div`
  width: 159px;
  height: 18px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAGCAYAAAACEPQxAAAAFUlEQVQYV2NgAIHnz5//RyLAYiAAAMIcCx2s9l//AAAAAElFTkSuQmCC') repeat;
  display: inline-block;
  vertical-align: 52px;
  margin: 0 28px;
`;
const MorePhotos = styled.div`
  width: 45px;
  height: 57px;
  font-family: 'Avenir', Arial;
  font-size: 14px;
  font-weight: 500;
  color: #c0c0c0;
  text-decoration: none;
  display: inline-block;
  vertical-align: 40px;
  cursor: pointer
`;
const Price = styled.div`
  font-size: 80px;
  color: #e2e2e2;
  display: block;
  padding: 0;
  margin: 26px 0 0 0;
  background: transparent;
  text-align: right;
  font-family: 'AvenirNext', Arial;
`;
const ProductDesc = styled.p`
  font-family: 'Avenir', Arial;
  font-size: 33px;
  font-weight: 500;
  line-height: 1.52;
  text-align: left;
  color: #d8d8d8;
  > a {
    color: #6e6e6e;
    text-decoration: none;
  }
`;
const BtnLarge = styled.button`
  font-family: 'AvenirNext', Arial;
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  border: 0;
  display: block;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  width: 100%;
  padding: 39.5px 0;
  margin-top: 176px;
  cursor: pointer;
  position: fixed;
  max-width: 1025px;
  bottom: 0;
`;

export default () => (
  <Product>
    <InfoLeft>
      <ProductName>Ultra Boost</ProductName>
      <BtnRound>save</BtnRound>
    </InfoLeft>
    <InfoRight>
      <SwitchColor>
        <button className="color1" />
        <button className="color2" />
        <button className="color3" />
        <button className="color4" />
      </SwitchColor>
      <Badge />
      <Price>170$</Price>
    </InfoRight>
    <img src={require('./img/product3-4.jpg')} className="photo-show" alt="" />
    <ProductPhotos>
      <img src={require('./img/product3-1.jpg')} alt="" />
      <img src={require('./img/product3-2.jpg')} alt="" />
      <img src={require('./img/product3-3.jpg')} alt="" />
      <img src={require('./img/product3-4.jpg')} className="current" alt="" />
      <Triple />
      <MorePhotos>see more photos</MorePhotos>
    </ProductPhotos>
    <ProductDesc>
      <a href="#test">Adidas</a>
      {' '}
      is a German multinational corporation,
      <br />
      headquartered in Herzogenaurach, Germany, that
      designs<br />and manufactures shoes, clothing and accessories.
    </ProductDesc>

    <BtnLarge>buy now</BtnLarge>
  </Product>
);
