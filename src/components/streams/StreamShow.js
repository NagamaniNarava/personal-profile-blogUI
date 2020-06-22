import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props){
    super(props);
    if(this.props.profiles){
      for(var i = 0; i < this.props.profiles.length; i++){
        if (this.props.profiles[i]['id'] === this.props.match.params.id){
          this.matchprofile = this.props.profiles[i];
          break;
        }
      }
    }
  }
  componentDidMount(){
    if(!this.matchprofile){
      const { id } = this.props.match.params;
      this.props.fetchStream(id);
    }
   }
  render() {
    if(this.matchprofile){
      const { firstName,lastName,role, summary,skills,education,phoneNo,mailId } = this.matchprofile;
      return (
        <div>
          <center><h1>{firstName} &ensp; {lastName}</h1></center>
          <h3>Role/Headline:</h3>
          <h5>{role}</h5>
          <h3>About:</h3>
          <h5>{summary}</h5>
          <h3>Skills:</h3>
          <h5>{skills}</h5>
          <h3>Education:</h3>
          <h5>{education}</h5>
          <h3>Contact Details:</h3>
          <h5>{phoneNo};&ensp;{mailId}</h5>
        </div>
      );
    }

    else{
      if(this.props.profile){
        const { firstName,lastName,role, summary,skills,education,phoneNo,mailId } = this.props.profile;
        return (
          <div>
            <center><h1>{firstName} &ensp; {lastName}</h1></center>
            <h3>Role/Headline:</h3>
            <h5>{role}</h5>
            <h3>About:</h3>
            <h5>{summary}</h5>
            <h3>Skills:</h3>
            <h5>{skills}</h5>
            <h3>Education:</h3>
            <h5>{education}</h5>
            <h3>Contact Details:</h3>
            <h5>{phoneNo};&ensp;{mailId}</h5>
          </div>
        );
      }
      else{
        return(<div>fetching profile</div>);
      }
    }
    
  }
}

const mapStateToProps = (state) => {
  return { profiles: state.profiles,profile:state.streams};
};

export default connect(
  mapStateToProps,{fetchStream}
)(StreamShow);