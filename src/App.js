import axios from 'axios';
import { useContext, useEffect } from 'react';
import classes from './App.module.css';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import { MovieContext } from './context/movie-context';

function App() {
  const { movieDetails, setMovieDetails } = useContext(MovieContext);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/343611?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [setMovieDetails]);

  const appBody = movieDetails.title.length <= 0 ? null : (
    <div className={classes.App}>
      <Header></Header>
      <Details></Details>
    </div>
  )

  return appBody;
}

export default App;
