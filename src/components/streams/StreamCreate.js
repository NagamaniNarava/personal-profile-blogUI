import React from 'react';
import { connect } from 'react-redux';
import { createStream ,fetchStreams} from '../../actions';
import StreamForm from './StreamForm';
import S3FileUpload from 'react-s3';
import history from '../../history';
import {Link} from 'react-router-dom';

const config = {
  bucketName: 'profileblog-profilepics',
  dirName: 'photos', 
  region: 'us-east-2',
  
}

class StreamCreate extends React.Component {
  state = {url:null};
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  upload = (e)=>{
    S3FileUpload
    .uploadFile(e.target.files[0], config)
    .then(data => {this.setState({url:data})})
    .catch(err => console.error(err))
  }
 
  renderUpload(){
    return(
      <div>
        <p>Profile photo upload</p>
      <input type = "file" onChange = {this.upload}></input>
        </div>
    );
  }
  componentWillUnmount(){
    this.props.fetchStreams();
  }
  render() {
    if (this.props.isGuestSignedIn || this.props.currentUserAuthenticateId){
      return (
        <div>
          <br/>
          <h3>Create your Profile</h3>
          {/* {this.renderUpload()} */}
          <br/>
          <StreamForm onSubmit={this.onSubmit} />
        </div>
      );
    }else{
      return(
        <div>
       { history.push('/') }
      </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUserAuthenticateId: state.auth.userAuthenticateId,
    isSignedIn: state.auth.isSignedIn,
    isGuestSignedIn:state.guestauth.isGuestSignedIn
  };
};

export default connect(
  mapStateToProps,
  { createStream,fetchStreams }
)(StreamCreate);
