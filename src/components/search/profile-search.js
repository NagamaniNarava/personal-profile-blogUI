import React from "react";
import { Dropdown, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { profilesearch } from '../../actions';
import SearchList from "./SearchList";

const options = [
  { key: 'angular', text: 'Angular', value: 'Angular' },
  { key: 'css', text: 'CSS', value: 'CSS' },
  { key: 'html', text: 'HTML', value: 'HTML' },
  { key: 'java', text: 'Java', value: 'Java' },
  { key: 'javascript', text: 'Javascript', value: 'Javascript' },
  { key: 'node', text: 'NodeJS', value: 'NodeJS' },
  { key: 'python', text: 'Python', value: 'Python' },
  { key: 'react', text: 'React', value: 'React' },
  { key: 'ruby', text: 'Ruby', value: 'Ruby' },
  { key: 'spring', text: 'Spring', value: 'Spring' },
  { key: 'ui', text: 'UI Design', value: 'UI Design' },
  { key: 'ux', text: 'UX', value: 'UX' }
  ] 

class ProfileSearch extends React.Component{
  state = {input:null};
  handleChange = (e,{value})=>{
    
    this.setState({input:value})
  }

  handleClick = ()=>{
    
    this.props.profilesearch(this.state.input);
  }

  renderList=()=>{
    if(this.props.searchresults){
      return (
        <SearchList/>
      )
    }
    
  }
  renderMessage() {
    return (
        <div className="item">
          <h5>
            Search Profiles With Desired Skills
          </h5>
      </div> 
      );
  }
  render(){
        return (
            <div>
            <br/>
            {this.renderMessage()}
            <br/>
            <Dropdown onChange={this.handleChange} placeholder='Skills' fluid multiple selection options={options} />
            <br/>
            <button className="ui button primary" onClick ={this.handleClick}>Submit</button> 
            {this.renderList()}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
      searchresults: state.searchresults
    };
  };
  
  export default connect(
    mapStateToProps,
    { profilesearch }
  )(ProfileSearch);