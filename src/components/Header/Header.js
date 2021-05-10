import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { MovieContext } from '../../context/movie-context';

import Logo from '../Logo/Logo';
import classes from './Header.module.css';

const Header = props => {
    const context = useContext(MovieContext);
    const { setMovieDetails } = context;
    const [enteredMovieName, setEnteredMovieName] = useState("");
    const [selectedMovie, setSelectedMovie] = useState("");
    const [showMovieList, setShowMovieList] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const [focusedItem, setFocusedItem] = useState(0);
    const inputRef = useRef(null);
    const ulRef = useRef(null);

    const keyPressHandler = useCallback(event => {
        if (showMovieList && movieList.length > 0 && event.key === "ArrowDown") {
            setFocusedItem(prevState => {
                return prevState + 1 > (movieList.length > 5 ? 5 : movieList.length) ? 1 : prevState + 1;
            });
        } else if (showMovieList && movieList.length > 0 && event.key === 'ArrowUp') {
            setFocusedItem(prevState => {
                return prevState - 1 < 1 ? (movieList.length > 5 ? 5 : movieList.length) : prevState - 1;
            });
        }
    }, [showMovieList, movieList.length]);

    const inputClickHandler = useCallback(event => {
        event.stopPropagation();
        setShowMovieList(true);
    }, []);

    const documentClickHandler = useCallback(() => {
        setShowMovieList(false);
        setFocusedItem(0);
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', keyPressHandler)
        return (() => {
            window.removeEventListener('keydown', keyPressHandler)
        });
    }, [keyPressHandler]);

    useEffect(() => {
        if (focusedItem) {
            ulRef.current.children[focusedItem - 1].children[0].focus();
        }
    }, [focusedItem]);

    useEffect(() => {
        const currentInputRef = inputRef.current;
        currentInputRef.focus();
        currentInputRef.addEventListener('click', inputClickHandler);
        window.addEventListener('click', documentClickHandler);

        return () => {
            currentInputRef.removeEventListener('click', inputClickHandler);
            window.removeEventListener('click', documentClickHandler);
        }
    }, [inputClickHandler, documentClickHandler]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (enteredMovieName.trim() !== "") {
                const query = enteredMovieName.split(' ').join('+');
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`)
                    .then(response => {
                        setMovieList(response.data.results)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [enteredMovieName]);

    useEffect(() => {
        if (selectedMovie) {
            axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    setMovieDetails(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [selectedMovie, setMovieDetails]);

    const setSelectedMovieHandler = useCallback((movie) => {
        setEnteredMovieName(movie['original_title']);
        setSelectedMovie(movie.id);
    }, []);

    let movieListDropDown = null;

    let movieListClasses = [classes.EmptyMovieList];

    if (movieList.length > 0) {
        movieListClasses = [classes.MovieList];
        const filteredMovieList = movieList.length > 5 ? 5 : movieList.length;
        movieListDropDown = (
            <ul ref={ulRef} className={movieListClasses.join(' ')}>
                { Object.keys(movieList).slice(0, filteredMovieList).map(movieKey =>
                    <li
                        key={movieList[movieKey].id}
                        onClick={() => setSelectedMovieHandler(movieList[movieKey])}>
                        <button>
                            {movieList[movieKey]['original_title']}
                        </button>
                    </li>
                )}
            </ul >
        );
    }

    return (
        <header className={classes.Header}>
            <Logo />
            <div className={classes.DropDown}>
                <input
                    className={classes.SearchInput}
                    value={enteredMovieName}
                    placeholder="Search Movie Title..."
                    ref={inputRef}
                    onChange={event => setEnteredMovieName(event.target.value)} />
                {showMovieList && movieListDropDown}
            </div>
        </header>
    );
}

export default Header;
