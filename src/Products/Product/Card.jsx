import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Badge from '../components/Badge';

const Card = styled.div`
  background: #f4f4f4;
  padding: 9px;
  margin-bottom: 24px;
  position: relative;
  & img {
    width: 100%;
    display: block;
  }
  > .sale-badge {
    position: absolute;
    top: 17px;
    right: 17px;
  }
`;

const Price = styled.div`
  margin-top: 6px;
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
