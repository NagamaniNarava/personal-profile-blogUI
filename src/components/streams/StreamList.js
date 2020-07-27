import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {  
  componentDidMount() {
    if(!this.props.profiles ){
      this.props.fetchStreams();
    }
  }
  renderAdmin(stream) {
    if ((stream.userAuthenticateId === this.props.currentUserAuthenticateId && this.props.isGuestSignedIn) || 
        (this.props.currentUserAuthenticateId && stream.userAuthenticateId === this.props.currentUserAuthenticateId) || (this.props.currentUserAuthenticateId && stream.userAuthenticateId == null)) {
      return (
        <div className="right floated content">
          {/* <Link to={`/applicant/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link> */}
          <Link
            to={`/applicant/delete/${stream.id}`}
            className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }
  renderRolename(stream){
    // if(stream.name === "NAGAMANI NARAVA"){
    //   return(
    //       <div>
    //         <div className="description">Senior Java Developer</div>
    //       </div>
    //     );
    // }
    // else{
    //   return(
    //     <div className="description">{stream.skills}</div>
    //   );
    // }
    return(
            <div>
              <div className="description">{stream.role}</div>
            </div>
          );
    
  }
  renderVerify(stream){
    if(stream.userAuthenticateId){
      return (
        <div style ={{display:"inline-block"}}>(Verified <i className="thumbs up outline icon"></i>)</div>
      )
    }
    
  }
  renderList() { 
    if(this.props.profiles){
      return this.props.profiles.map(stream => {
        return (
          <div className="item" key={stream.id}>
              {this.renderAdmin(stream)} 
            <i className="user icon" />
            <div className="content">
              <Link to={`/applicants/${stream.id}`} className="header">
                {stream.firstName} {stream.lastName} {this.renderVerify(stream)}
              </Link>
             {this.renderRolename(stream)}
              
              
            </div> 
          </div>
        );
      });
    }
    else{
      return(
        <div className="ui placeholder">
        <div className="image header">
         <div className="line"></div>
         <div className="line"></div>
       </div>
       <div className="paragraph">
         <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
         <div className="line"></div>
       </div>
        </div>
      );
    }
    
  }

  renderCreate() {
    if (this.props.isSignedIn || this.props.isGuestSignedIn) {
      return (
        <div style={{ textAlign: 'center' }}>
          <Link to="/applicants/new" className="ui button primary">
            Add Profile
          </Link>
        </div>
      );
    }
  }
  renderMessage() {
    if (!this.props.isSignedIn){
      return (
        <div className="item">
          <h4>Sign In Instructions:</h4>
          <h5>
            <ol>
              <li>SignIn with Google,to create verified profiles.</li>
              <li>SignIn as Guest, to get to know the blog, which doesnt need any login Info.</li>
            </ol>
          </h5>
      </div> 
      );
  }
}     

  render() {
    return (
      <div>
        <br/>
         {this.renderMessage()}  
        <br/>
        {/* <h2>PROFILES:</h2> */}
        <table className="ui celled padded table">
          <thead>
            <tr>
              <th>PROFILES</th>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td>
            <div className="ui celled list">{this.renderList()}</div>
          </td>
          </tr>
          </tbody>
          <tfoot>
            <tr><th colSpan="5">
              <div className="ui right floated pagination menu">
                <a className="icon item">
                  <i className="left chevron icon"></i>
                </a>
                <a className="item">1</a>
                <a className="icon item">
                  <i className="right chevron icon"></i>
                </a>
              </div>
            </th>
            </tr>
          </tfoot>
        </table>
        
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profiles: state.profiles,
    currentUserAuthenticateId: state.auth.userAuthenticateId,
    isSignedIn: state.auth.isSignedIn,
    isGuestSignedIn:state.guestauth.isGuestSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
