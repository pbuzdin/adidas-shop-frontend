import React, { Component } from 'react';
import styled from 'styled-components';

import Badge from '../components/Badge';
import ProductPhotos from './ProductPhotos';

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
const SelectColor = styled.div`
  display: inline-block;
  margin-top: 6px;
`;
const BtnColor = styled.button`
    width: 18px;
    height: 18px;
    border-radius: 18px;
    border: 0;
    padding: 4px;
    margin-left: 13px;
    cursor: pointer;
    background: #c5c5c5;
    background-color: ${props => (props.color ? `${props.color};` : 'transparent')};
`;
const PhotoBig = styled.img`
    width: 100%;
    max-height: 650px;
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

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPhoto: 0 };
    this.selectProductPhoto = this.selectProductPhoto.bind(this);
  }

  selectProductPhoto(currentPhoto) {
    this.setState({ currentPhoto });
  }

  render() {
    return (
      <Product>
        <Container>
          <InfoLeft>
            <ProductName>Ultra Boost</ProductName>
            <BtnRound>save</BtnRound>
          </InfoLeft>
          <InfoRight>
            <SelectColor>
              <BtnColor color="#c5c5c5" />
              <BtnColor color="#4d87ca" />
              <BtnColor color="#4a4a4a" />
              <BtnColor color="#e0e0e0" />
            </SelectColor>
            <Badge />
            <Price>170$</Price>
          </InfoRight>
          <PhotoBig src={photos[this.state.currentPhoto].src} alt="" />
          <ProductPhotos
            photos={photos}
            onClick={this.selectProductPhoto}
            currentPhoto={this.state.currentPhoto}
          />
          <ProductDesc>
            <a href="#test">Adidas</a>
            {' '}
            is a German multinational corporation,
            <br />
            headquartered in Herzogenaurach, Germany, that
            designs<br />and manufactures shoes, clothing and accessories.
          </ProductDesc>
        </Container>
        <BtnLarge>buy now</BtnLarge>
      </Product>
    );
  }
}

export default Details;
