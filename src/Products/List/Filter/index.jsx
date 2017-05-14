import React from 'react';
import styled from 'styled-components';

import SelectGender from './SelectGender';
import SelectSize from './SelectSize';

const Filter = styled.div`
    margin-bottom: 36px;
  > img {
    background: #ebebeb;
    padding: 11px 7.5px;
    float: left;
    width: 55px;
  }
`;
const FilterIcon = styled.img`
  background: #ebebeb;
  padding: 11px 7.5px;
  float: left;
  width: 55px;
`;

export default () => (
  <Filter>
    <FilterIcon src={require('./filter.svg')} alt="" />
    <SelectGender />
    <SelectSize />
  </Filter>
);
