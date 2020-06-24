import React from 'react';
import { connect } from 'react-redux';
import { guestSignIn, guestSignOut } from '../actions';

class GuestAuth extends React.Component {
  onguestSignOutClick=()=>{
    this.props.guestSignOut();
  }
  onGuestSignInClick=()=>{
    this.props.guestSignIn();
  }
  renderAuthButton() {
    if (this.props.isGuestSignedIn) {
      return (
        <button onClick={this.onguestSignOutClick} className="ui green google button">
          Guest SignOut
        </button>
      );
    } else {
      return (
        <button onClick={this.onGuestSignInClick} className="ui green button">
            Guest SignIn
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
} 

const mapStateToProps = state => {
  return { isGuestSignedIn: state.guestauth.isGuestSignedIn };
};

export default connect(
  mapStateToProps,
  { guestSignIn, guestSignOut }
)(GuestAuth);
