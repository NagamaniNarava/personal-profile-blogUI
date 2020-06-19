import React from 'react';

class StreamShow extends React.Component {
  render() {
    
    return (
      <div>
        <br/>

        <h2>Project Summary: </h2>

        <ul>
          <li>This blog is a Single Page Application developed in React with Redux</li>
          <li>Profile data is stored using Spring REST with Hibernate</li>
          <li>RDS database is created in AWS to add profile information</li>
          <li>RDS database is created in AWS to add profile information</li>
          <li>REST Application is deployed on AWS Elastic Bean Stalk</li>
          <li>Front end is deployed in AWS EC2 Instance</li>
        </ul>

        <p >Note: I am still working on the implementation of the blog.Please bear with me if you find any bugs :)</p>

      </div>
    );
  }
}
export default StreamShow;
