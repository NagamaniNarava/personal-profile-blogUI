import React from 'react';

class StreamShow extends React.Component {
  render() {
    
    return (
      <div>
        <br/>
        <h3>FULL STACK APPLICATION </h3>
        <h4>FRONT END </h4>
        <ul>
          <li>Learning Geeks Blog is Single Page Application developed in React with Redux</li>
          <li>Used React Router to provide all of the navigation and view-loading goodness!</li>
          <li>Created multiple components.Mentioning important components below</li>
          <ol>
            <li>ProfileCreate</li>
            <li>ProfileShow</li>
            <li>ProfileDelete</li>
            <li>ProfileSearch</li>
            <li>ProfileAuth</li>
          </ol>
          <li>Maintained global state using Redux store</li>
          <li>Used redux-thunk as middleware for API calls</li>
          <h5>GitHub Link </h5>
          <a>https://github.com/NagamaniNarava/personal-profile-blogUI</a>
        </ul>

        <h4>BACK END </h4>
        <ul>
          <li>Spring Boot application with individual micro services.</li>
          <ol>
            <li>Profiles Service</li>
              <a>https://github.com/NagamaniNarava/springboot-profile-blog-service</a>
            <li>ProfileSearch Service</li>
              <a>https://github.com/NagamaniNarava/springboot-profile-search-service</a>
          </ol>
          <li>Implemented with Java 8</li>
        </ul>
        <h5>DB </h5>
        <ul>
          <li>AWS-RDS is used to store Profile data</li>
          <li>DB is shared between the micro services</li>
        </ul>

        <h5>DEPLOY </h5>
        <ul>
          <li>Deployed on AWS cloud</li>
        </ul>
          
      </div>
    );
  }
}
export default StreamShow;
