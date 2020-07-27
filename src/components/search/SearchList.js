import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class SearchList extends React.Component {  


  renderMessage() {
    return (
        <div className="item">
          <h5>
            Search Results
          </h5>
      </div> 
      );
  }
  renderRolename(stream){
    return(
            <div>
              <div className="description">{stream.role}</div>
            </div>
          );
    
  }
  renderList() { 
    
    if(this.props.profiles){
      return this.props.profiles.map(stream => {
        return (
          <div className="item" key={stream.id}>
            <i className="user icon" />
            <div className="content">
              <Link to={`/applicants/${stream.id}`} className="header">
                {stream.firstName} {stream.lastName}
              </Link>
             {this.renderRolename(stream)}
              
              
            </div> 
          </div>
        );
      });
    }
    else{
      return(
        <div class="ui placeholder">
        <div class="image header">
         <div class="line"></div>
         <div class="line"></div>
       </div>
       <div class="paragraph">
         <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
         <div class="line"></div>
       </div>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profiles: state.searchresults,
  };
};

export default connect(
  mapStateToProps
)(SearchList);
