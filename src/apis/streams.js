import axios from 'axios';

export default axios.create({
  baseURL: 'http://Personalprofileblogsping-env.eba-vyzz4uzw.us-east-2.elasticbeanstalk.com/api'
  //baseURL: 'http://localhost:8082/spring-crm-rest/api'
});
