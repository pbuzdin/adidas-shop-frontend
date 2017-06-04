import React, { Component } from 'react';
import styled from 'styled-components';

import Badge from '../components/Badge';
import BtnColor from './BtnColor';

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
  background: ${props => props.color};
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
const SelectColor = styled.div`
  display: inline-block;
  margin-top: 6px;
`;
const Photos = styled.div`
  height: 120px;
  overflow: hidden;
`;
const PhotoBig = styled.img`
  max-width: 100%;
`;
const PhotoSmall = styled.img`
  max-height: 120px;
  border: 5px solid transparent;
  cursor: pointer;
  border-color: ${props => (props.isActive ? '#e8e8ea' : 'transparent')};
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
  color: ${props => props.color};
  display: block;
  padding: 0;
  margin: 26px 0 0 0;
  background: transparent;
  text-align: right;
  font-family: 'AvenirNext', Arial;
`;
const Description = styled.p`
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

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: 0 };
    this.handleColorSwitch = this.handleColorSwitch.bind(this);
  }

  handleColorSwitch(currentColor) {
    this.setState({ currentColor });
  }

  render() {
    return (
      <Product>
        <InfoLeft>
          <ProductName>Ultra Boost</ProductName>
          <BtnRound color={colors[this.state.currentColor]}>
            save
          </BtnRound>
        </InfoLeft>
        <InfoRight>
          <SelectColor>
            <BtnColor colors={colors} onChange={this.handleColorSwitch} />
          </SelectColor>
          <Badge />
          <Price color={colors[this.state.currentColor]}>170$</Price>
        </InfoRight>
        <PhotoBig src={require('./img/product3-4.jpg')} alt="" />
        <Photos>
          <PhotoSmall src={require('./img/product3-1.jpg')} alt="" />
          <PhotoSmall src={require('./img/product3-2.jpg')} alt="" />
          <PhotoSmall src={require('./img/product3-3.jpg')} alt="" />
          <PhotoSmall src={require('./img/product3-4.jpg')} alt="" isActive />
          <Triple />
          <MorePhotos>see more photos</MorePhotos>
        </Photos>
        <Description>
          <a href="#test">Adidas</a>
          {' '}
          is a German multinational corporation,
          <br />
          headquartered in Herzogenaurach, Germany, that
          designs<br />and manufactures shoes, clothing and accessories.
        </Description>

        <BtnLarge>buy now</BtnLarge>
      </Product>
    );
  }
}

export default Details;
