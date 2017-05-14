import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Badge from '../Badge';
// import './style.css';

const Card = styled.div`
  background: #f4f4f4;
  padding: 8px 6px;
  margin-bottom: 24px;
  & img {
    width: 100%;
  }
  > .sale-badge {
    position: absolute;
    margin-top: 7px;
    margin-left: 243px;
  }
`;

const Price = styled.div`
& a {
  display: block;
  padding: 23px 0 27px 0;
  text-align: center;
  font-family: 'AvenirNext', Arial;
  font-size: 30px;
  font-weight: bold;
  background: #ffffff;
  color: #0d0d0d;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 8px;
  background-image: linear-gradient(107deg, #0c09bf, #966dd8);
  color: #ffffff;
  }
`;

export default () => (
  <Card>
    <Badge />
    <img src={require('./img/product1.jpg')} alt="" />
    <Price>
      <Link to="/item">170$</Link>
    </Price>
  </Card>
);
