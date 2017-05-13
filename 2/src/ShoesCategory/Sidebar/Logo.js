import React from 'react';
import './style.css';

export default () => {
  return (
    <div className="logo">
      <img src={require("./img/logo.svg")} className="logo-img" alt="" />
    </div>
  );
}
