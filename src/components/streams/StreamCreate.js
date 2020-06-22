import React from 'react';
import { connect } from 'react-redux';
import { createStream ,fetchStreams} from '../../actions';
import StreamForm from './StreamForm';
import S3FileUpload from 'react-s3';

const config = {
  bucketName: 'profileblog-profilepics',
  dirName: 'photos', 
  region: 'us-east-2',
  
}

class StreamCreate extends React.Component {
  state = {url:null};
  onSubmit = formValues => {
    // console.log(formValues);
    this.props.createStream(formValues);
  };
  upload = (e)=>{
    // console.log(e.target.files);
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
    return (
      <div>
        <br/>
        <h3>Create your Profile</h3>
        {/* {this.renderUpload()} */}
        <br/>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream,fetchStreams }
)(StreamCreate);
