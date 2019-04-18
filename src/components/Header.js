import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      {/*use activeClassName to access active state directly from css file
        use activeStyle ={{background: 'tomato'}} to access active state directly*/}
      <li><NavLink to="/about" >About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>
  </header>
);

export default Header;
