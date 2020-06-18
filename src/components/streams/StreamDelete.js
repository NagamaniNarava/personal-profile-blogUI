import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.deleteStream(this.props.match.params.id);

    
  }

  // renderActions() {
  //   const { id } = this.props.match.params;

  //   return (
  //     <React.Fragment>
  //       <button
  //         onClick={() => this.props.deleteStream(id)}
  //         className="ui button negative"
  //       >
  //         Delete
  //       </button>
  //       <Link to="/" className="ui button">
  //         Cancel
  //       </Link>
  //     </React.Fragment>
  //   );
  // }

  // renderContent() {
  //   if (!this.props.stream) {
  //     return 'Are you sure you want to delete this stream?';
  //   }

  //   return `Are you sure you want to delete the stream with title: ${
  //     this.props.stream.title
  //   }`;
  // }

  
  
  render() {
    return (
    <div>
      Working on delete is in progress....
      
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { stream: state.streams};
};

export default connect(
  mapStateToProps,
  { fetchStream,deleteStream }
)(StreamDelete);
