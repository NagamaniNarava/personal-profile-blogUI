import axios from 'axios';

export default axios.create({
  baseURL: 'http://personalprofileblogsping-env.eba-5mqfpmi2.us-east-2.elasticbeanstalk.com/api'
  //baseURL: 'http://localhost:8082/spring-crm-rest/api'
});
