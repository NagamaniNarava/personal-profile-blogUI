import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {  
  componentDidMount() {
    if(!this.props.profiles){
      this.props.fetchStreams();
    }
  }
  renderAdmin(stream) {
    if ((stream.userId === this.props.currentUserId && this.props.isGuestSignedIn) || 
        (this.props.currentUserId && stream.userId === this.props.currentUserId) || (this.props.currentUserId && stream.userId == null)) {
      return (
        <div className="right floated content">
          {/* <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link> */}
          <Link
            to={`/streams/delete/${stream.id}`}
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
    if(stream.userId){
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
        <div>Profiles Loading</div>
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
          <h5>
            Please sign in with Google to create your profile in this blog.
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
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    isGuestSignedIn:state.guestauth.isGuestSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
