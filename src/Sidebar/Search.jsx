import React from 'react';
import styled from 'styled-components';

const Search = styled.form`
  margin: 0 auto;
  border-bottom: 4px solid #373737;
  padding: 0;
  overflow: hidden;
  > img {
  position: absolute;
  width: 28px;
  height: 30px;
  margin: 10px;
  }
`;
const Input = styled.input`
  background: transparent;
  border: 0;
  color: #373737;
  font-size: 30px;
  margin-left: 45px;
  min-height: 30px;
  padding: 8px 0;
  max-width: 281px;
  &:focus {
    outline: none;
  }
`;

export default () => (
  <Search>
    <img src={require('./img/search-icon.svg')} alt="" />
    <Input type="input" name="search" />
  </Search>
);
