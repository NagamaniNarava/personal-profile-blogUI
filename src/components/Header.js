import React from 'react';
import GoogleAuth from './GoogleAuth';
import {connect} from "react-redux"
import { Link } from 'react-router-dom';
import GuestAuth from './GuestAuth';

class Header extends React.Component {
    renderButtons=()=>{
    if (!this.props.currentUserAuthenticateId && !this.props.isGuestSignedIn){
        return(
            <div className="right menu">
            <GuestAuth/>
            <GoogleAuth />
            </div>
        )
    }else if(!this.props.currentUserAuthenticateId && this.props.isGuestSignedIn){
        return(
            <div className="right menu">
            <GuestAuth/>
            </div>
        )
    }else if(this.props.currentUserAuthenticateId && !this.props.isGuestSignedIn){
        return(
            <div className="right menu">
            <GoogleAuth />
            </div>
        )
    }
        
    }
    render(){
        return (
            
            <div>
                    <div className="pusher">
                        <div className="ui inverted vertical masthead center aligned segment">
        
                            <div className="ui container">
                            <div className="ui large secondary inverted pointing menu">
                                {/* <a className="toc item">
                                <i className="sidebar icon"></i>
                                </a> */}
                                <Link to="/" className="item">Profile Service</Link>
                                <Link to="/search" className="item">Search Service</Link>
                                <Link to="/about" className="item"> About</Link> 
                                
                                
                                    {this.renderButtons()}
                                
                                
                                {/* <div className="right item">
                                    <GoogleAuth />
                                </div> */}
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
    }
    
};

const mapStateToProps = state => {
    return {
      streams: state.profiles,
      currentUserAuthenticateId: state.auth.userAuthenticateId,
      isSignedIn: state.auth.isSignedIn,
      isGuestSignedIn:state.guestauth.isGuestSignedIn
    };
  };
  
  export default connect(
    mapStateToProps,
  )(Header);
