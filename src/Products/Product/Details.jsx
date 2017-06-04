import React, { Component } from 'react';
import styled from 'styled-components';

import Badge from '../components/Badge';
import Photos from './Photos';
import BtnColor from './BtnColor';

const Container = styled.div`
  margin-top: 26px;
  padding-left: 26px;
`;
const Product = styled.div`
  background: #fff;
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
const PhotoBig = styled.img`
    width: 100%;
    max-height: 650px;
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
const Desc = styled.p`
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

const photos = [
  {
    id: 1,
    src: require('./img/product1.jpg'),
  },
  {
    id: 2,
    src: require('./img/product2.jpg'),
  },
  {
    id: 3,
    src: require('./img/product3.jpg'),
  },
  {
    id: 4,
    src: require('./img/product2.jpg'),
  },
  {
    id: 5,
    src: require('./img/product1.jpg'),
  },
];

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { photoIndex: 0 };
    this.handleProductPhoto = this.handleProductPhoto.bind(this);
  }

  handleProductPhoto(photoIndex) {
    this.setState({ photoIndex });
    this.handleColorSwitch = this.handleColorSwitch.bind(this);
  }

  handleColorSwitch(currentColor) {
    this.setState({ currentColor });
  }

  render() {
    return (
      <Product>
        <Container>
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
            <Price>170$</Price>
          </InfoRight>
          <PhotoBig src={photos[this.state.photoIndex].src} alt="" />
          <Photos
            photos={photos}
            onClick={this.handleProductPhoto}
            photoIndex={this.state.photoIndex}
          />
          <Desc>
            <a href="#test">Adidas</a>
            {' '}
            is a German multinational corporation,
            <br />
            headquartered in Herzogenaurach, Germany, that
            designs<br />and manufactures shoes, clothing and accessories.
          </Desc>
        </Container>
        <BtnLarge>buy now</BtnLarge>
      </Product>
    );
  }
}

export default Details;
