import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SelectGender from './SelectGender';
import SelectSize from './SelectSize';
import Card from './Card';

export default () => {
  return (
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
}
