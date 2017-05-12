import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css';

export default () => {
  return (
    <div className="search">
      <form>
        <label>
          <img src={require("./img/search-icon.svg")} className="search-icon" alt="" />
          <input type="input" />
        </label>
      </form>
    </div>
  );
}
