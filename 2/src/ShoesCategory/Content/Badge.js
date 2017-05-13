import React from 'react';
import './style.css';

const Badge = (props) => (
  <span className="sale-badge">{props.children}</span>
)

export default () => {
  return (
    <Badge>sale</Badge>
  );
}
