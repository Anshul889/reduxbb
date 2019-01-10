import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-87a1d.firebaseio.com/'
});

export default instance;
