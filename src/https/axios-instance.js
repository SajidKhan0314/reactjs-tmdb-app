import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`
});

export default axiosInstance;
