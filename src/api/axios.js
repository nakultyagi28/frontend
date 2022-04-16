import axios from 'axios';

export default axios.create({
    baseURL: 'http://React-env.eba-jwtvrpd3.us-east-1.elasticbeanstalk.com/api'
});