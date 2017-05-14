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
        <Col xs={4}>
          <Card />
        </Col>
        <Col xs={4}>
          <Card />
        </Col>
        <Col xs={4}>
          <Card />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Card />
        </Col>
        <Col xs={4}>
          <Card />
        </Col>
        <Col xs={4}>
          <Card />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Card />
        </Col>
        <Col xs={4}>
          <Card />
        </Col>
        <Col xs={4}>
          <Card />
        </Col>
      </Row>
    </Grid>
  </Content>
);
