import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <div className="ui primary pointing menu">
      
    //   <Link to="/" className="item">
    //   <h1 style= {{ fontSize: 25, color: "green" }}> PERSONAL PROFILE BLOG  </h1>
    //   </Link> 
    //   <div className="right menu">
    //      <Link to="/blog" className="item">
    //       <h2 style= {{ fontSize: 25, color: "green" }}>BLOG INFO</h2>
    //     </Link> 
        
    //     <GoogleAuth />
    //   </div>
    // </div>
    <div>
            {/* <div className="ui large top fixed menu transition hidden">
                <div className="ui container">
                    <Link to="/" className="item">Home</Link>
                    <Link to="/algorithms" className="item">Algorithms</Link>
                    <a className="item">Configurations</a>
                    <a className="item">About</a>
                    <div className="right menu">
                    <div className="item">
                        <a className="ui button">Log in</a>
                    </div>
                    <div className="item">
                        <a className="ui primary button">Sign Up</a>
                    </div>
                    </div>
                </div>
            </div> */}


            {/* <div className="ui vertical inverted sidebar menu left">
            <Link to="/" className="item">Home</Link>
            <Link to="/algorithms" className="item">Algorithms</Link>
            <a className="item">Configurations</a>
            <a className="item">About</a>
            <a className="item">Login</a>
            <a className="item">Signup</a>
            </div> */}



            <div className="pusher">
                <div className="ui inverted vertical masthead center aligned segment">

                    <div className="ui container">
                    <div className="ui large secondary inverted pointing menu">
                        {/* <a className="toc item">
                        <i className="sidebar icon"></i>
                        </a> */}
                        <Link to="/" className="item">Home</Link>
                        <Link to="/about" className="item"> About</Link> 
                        <div className="right item">
                        <GoogleAuth />
                        </div>
                    </div>
                    </div>

                    <div className="ui text container">
                    <h1 className="ui inverted header">
                        Learning Geeks
                    </h1>
                    {/* <h2>Personal Profile Blog</h2> */}
                    {/* <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div> */}
                    </div>

                </div>
            </div>
        </div>
  );
};

export default Header;
