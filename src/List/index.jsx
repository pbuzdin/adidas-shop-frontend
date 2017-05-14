import React from 'react';
import './style.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SelectGender from './Filter/SelectGender';
import SelectSize from './Filter/SelectSize';
import Card from '../Product//Card';

export default () => (
  <div className="products-grid">
    <Grid>
      <Row>
        <Col xs={4}>
          <SelectGender />
        </Col>
        <Col xs={8}>
          <SelectSize />
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
  </div>
);
