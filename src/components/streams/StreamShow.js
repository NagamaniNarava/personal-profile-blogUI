import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import pic from "./mani.png";
import defaultpic from "./default-profile-picture.png";


class StreamShow extends React.Component {
  constructor(props){
    super(props);
    if(this.props.profiles!=null){
      if(this.props.profiles.length>0){
        for(var i = 0; i < this.props.profiles.length; i++){
          if (this.props.profiles[i]['id'] == this.props.match.params.id){
            this.matchprofile = this.props.profiles[i];
            break;
          }
        }
      }
    }
  }
  renderManiPic(firstName){
    if(firstName === 'NAGAMANI'){
      return(<center><img alt = "profile pic" src={pic} className="ui circular image" style={{width:200}}></img></center>);
    }
    else{
      return(<center><img alt = "profile pic" src={defaultpic} className="ui circular image" style={{width:200}}></img></center>);
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
      const { firstName,lastName,role, summary,applicantSkills,education,phoneNo,mailId } = this.matchprofile;
      return (
        <div>
          <br/>
          {this.renderManiPic(firstName)}
          <center><h1>{firstName} &nbsp; {lastName}</h1></center>
          <h3>Role/Headline:</h3>
          <h5>{role}</h5>
          <h3>About:</h3>
          <h5>{summary}</h5>
          <h3>Skills:</h3>
          <h5>{applicantSkills}</h5>
          <h3>Education:</h3>
          <h5>{education}</h5>
          <h3>Contact Details:</h3>
          <h5>{phoneNo};&ensp;{mailId}</h5>
        </div>
      );
    }

    else{
      if(this.props.profile){
        const { firstName,lastName,role, summary,applicantSkills,education,phoneNo,mailId } = this.props.profile;
        return (
          <div>
            <br/>
            {this.renderManiPic(firstName)}
            <center><h1>{firstName} &nbsp; {lastName}</h1></center>
            <h3>Role/Headline:</h3>
            <h5>{role}</h5>
            <h3>About:</h3>
            <h5>{summary}</h5>
            <h3>Skills:</h3>
            <h5>{applicantSkills}</h5>
            <h3>Education:</h3>
            <h5>{education}</h5>
            <h3>Contact Details:</h3>
            <h5>{phoneNo};&ensp;{mailId}</h5>
          </div>
        );
      }
      else{
        return(
      
          <div class="ui fluid placeholder">
            <div class="image header">
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div class="paragraph">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        );
      }
    }
    
  }
}

const mapStateToProps = (state) => {
  return { profiles: state.profiles,
           profile:state.streams};
};

export default connect(
  mapStateToProps,{fetchStream}
)(StreamShow);