import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
   
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);    
  }
  render() {
    
    if (!this.props.stream) {
      return <div><h1>Loading...</h1></div>;
    }

    const { name, summary,skills,education,contactInfo } = this.props.stream;

    if (!name && !summary && !skills && !education && !contactInfo) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{name}</h1>
        <h3>Summary:</h3>
        <h5>{summary}</h5>
        <h3>Skills:</h3>
        <h5>{skills}</h5>
        <h3>Education:</h3>
        <h5>{education}</h5>
        <h3>Contact Details:</h3>
        <h5>{contactInfo}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams};
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
