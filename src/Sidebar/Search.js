import React from 'react';

export default () => (
  <div className="search">
    <form>
      <label>
        <img src={require("./img/search-icon.svg")} className="search-icon" alt="" />
        <input type="input" />
      </label>
    </form>
  </div>
)