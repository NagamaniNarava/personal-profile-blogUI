import axios from 'axios';

export default axios.create({
    baseURL: 'http://myprofileproject-env-v2.eba-kesga4uk.us-east-2.elasticbeanstalk.com/api'
  //baseURL: 'http://localhost:8018/api'
});
