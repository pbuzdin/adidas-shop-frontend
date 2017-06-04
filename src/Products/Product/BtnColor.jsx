import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 18px;
  border: 0;
  padding: 4px;
  margin-left: 13px;
  cursor: pointer;
  background-color: ${props => props.color};
  &:focus {
    outline: none;
  }
`;

export default props => (
  <div>
    {props.colors.map((color, index) => (
      <Button key={color} color={color} onClick={() => props.onChange(index)} />
    ))}
  </div>
);
