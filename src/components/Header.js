import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui primary pointing menu">
      
      <Link to="/" className="item">
      <h1 style= {{ fontSize: 25, color: "green" }}> PERSONAL PROFILE BLOG  </h1>
      </Link> 
      <div className="right menu">
         <Link to="/blog" className="item">
          <h2 style= {{ fontSize: 25, color: "green" }}>BLOG INFO</h2>
        </Link> 
        
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
