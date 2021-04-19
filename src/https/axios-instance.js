import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=1115fb0436d21fc0905dbb235b1ae399&query='
});

export default axiosInstance;
