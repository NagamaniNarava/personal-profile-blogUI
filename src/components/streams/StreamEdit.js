import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams, editStream ,fetchStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
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
  componentDidMount() {
    //this.props.fetchStream(this.props.match.params.id);
  }

  componentWillUnmount(){
    this.props.fetchStreams();
    //this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if(this.matchprofile){
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            // initialValues={_.pick(this.props.stream, 'title', 'description')}
            //initialValues={{firstName:"InitFirstName",lastName:"InitlastName",skills:"Initskills",role:"Initrole"}}
            initialValues={this.matchprofile}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { profiles: state.profiles,profile:state.streams};
};

export default connect(
  mapStateToProps,
  { fetchStreams, editStream,fetchStream }
)(StreamEdit);
