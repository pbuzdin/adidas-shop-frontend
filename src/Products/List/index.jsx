import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Filter from './Filter';
import Card from '../Product/Card';

const Content = styled.div`
  background: #FFF;
  max-width: 1025px;
  float: left;
  width: 100%;
  margin-left: 25px;
  margin-top: 17px;
`;

export default () => (
  <Content>
    <Filter />
    <Grid>
      <Row>
        <Col xs={12} sm={6} lg={4}>
          <Card to="/products/football/shoes/ultraboost" />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card to="/products/football/shoes/ultraboost" />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card to="/products/football/shoes/ultraboost" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} lg={4}>
          <Card to="/products/football/shoes/ultraboost" />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card to="/products/football/shoes/ultraboost" />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card to="/products/football/shoes/ultraboost" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} lg={4}>
          <Card to="/products/football/shoes/ultraboost" />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card to="/products/football/shoes/ultraboost" />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card to="/products/football/shoes/ultraboost" />
        </Col>
      </Row>
    </Grid>
  </Content>
);
