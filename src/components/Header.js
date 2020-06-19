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
            {/* <div class="ui large top fixed menu transition hidden">
                <div class="ui container">
                    <Link to="/" className="item">Home</Link>
                    <Link to="/algorithms" className="item">Algorithms</Link>
                    <a class="item">Configurations</a>
                    <a class="item">About</a>
                    <div class="right menu">
                    <div class="item">
                        <a class="ui button">Log in</a>
                    </div>
                    <div class="item">
                        <a class="ui primary button">Sign Up</a>
                    </div>
                    </div>
                </div>
            </div> */}


            {/* <div class="ui vertical inverted sidebar menu left">
            <Link to="/" className="item">Home</Link>
            <Link to="/algorithms" className="item">Algorithms</Link>
            <a class="item">Configurations</a>
            <a class="item">About</a>
            <a class="item">Login</a>
            <a class="item">Signup</a>
            </div> */}



            <div class="pusher">
                <div class="ui inverted vertical masthead center aligned segment">

                    <div class="ui container">
                    <div class="ui large secondary inverted pointing menu">
                        {/* <a class="toc item">
                        <i class="sidebar icon"></i>
                        </a> */}
                        <Link to="/" className="item">Home</Link>
                        <Link to="/about" className="item"> About</Link> 
                        <div class="right item">
                        <GoogleAuth />
                        </div>
                    </div>
                    </div>

                    <div class="ui text container">
                    <h1 class="ui inverted header">
                        Learning Geeks
                    </h1>
                    {/* <h2>Personal Profile Blog</h2> */}
                    {/* <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div> */}
                    </div>

                </div>
            </div>
        </div>
  );
};

export default Header;
