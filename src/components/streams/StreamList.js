import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
 

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          {/* <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link> */}
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderRolename(stream){
    if(stream.name == "NAGAMANI NARAVA"){
      return(
          <div>
            <div className="description">Senior Java Developer</div>
          </div>
        );
    }
    else{
      return(
        <div className="description">{stream.skills}</div>
      );
    }
    
  }

  renderList() {
   
    
    if(this.props.streams!= null){
      return this.props.streams.map(stream => {
        return (
          <div className="item" key={stream.id}>
              {this.renderAdmin(stream)} 
            <i className="user icon" />
            <div className="content">
              <Link to={`/applicants/${stream.id}`} className="header">
                {stream.name}
              </Link>
             {this.renderRolename(stream)}
              
              
            </div> 
          </div>
        );
      });
    }
    
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/applicants/new" className="ui button primary">
            Create Profile
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
            Please login with Google to create your profile in this blog.
          </h5>
      </div> 
      );
  }
}     

  render() {
    return (
      <div>
         {/* {this.renderMessage()}  */}
        <br/>
        <h2>PROFILES:</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: state.profiles,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
