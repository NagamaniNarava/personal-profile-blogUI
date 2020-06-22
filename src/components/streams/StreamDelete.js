import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';


class StreamDelete extends React.Component {
  constructor(props){
    super(props);
    for(var i = 0; i < this.props.profiles.length; i++){
      if (this.props.profiles[i]['id'] == this.props.match.params.id){
        this.matchprofile = this.props.profiles[i];
        break;
      }
  }
}

  componentWillUnmount(){
    this.props.fetchStreams();
  }
  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.deleteStream(id);
          }}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    return `Are you sure you want to delete the profile: ${
      this.matchprofile.firstName
    } ${
      this.matchprofile.lastName
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Profile"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { profiles: state.profiles};
};

export default connect(
  mapStateToProps,
  { deleteStream,fetchStreams }
)(StreamDelete);
