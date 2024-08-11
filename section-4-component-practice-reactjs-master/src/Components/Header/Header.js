import "./Header.css";

import React from "react";

const Header = (props) => {
  return (
    <div className='header-container'>
      <img src={props.image} alt={props.title} className='header-image'/>
      <h1 className='header-title'>{props.title}</h1>
      <p className='header-description'>{props.description}</p>
    </div>
  );
};

export default Header;
