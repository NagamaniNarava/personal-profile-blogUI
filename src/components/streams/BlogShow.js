import React from 'react';

class StreamShow extends React.Component {
  render() {
    
    return (
      <div style = {{color:"purple"}}>
        <h3>This blog is a Single Page Application developed in React with Redux </h3>
        <h3>Profile data is stored using Spring REST with Hibernate</h3>
        <h3>RDS database is created in AWS to add profile information</h3>
        <h3>REST Application is deployed on AWS Elastic Bean Stalk</h3>
        <h3>Front end is deployed in AWS Amplify</h3>

        <h3 style = {{color:"red"}}>Note: I am still working on the implementation of the blog.Please bear with me if you find any bugs :)</h3>

      </div>
    );
  }
}
export default StreamShow;
