import React, { useCallback, useState } from "react";

const initialState = {
    id: '',
    poster_path: '',
    backdrop_path: '',
    title: '',
    tagline: '',
    overview: '',
    genres: [],
    production_companies: [],
    release_data: '',
    runtime: '',
    revenue: '',
    vote_average: ''
};

export const MovieContext = React.createContext(initialState);

const MovieContextProvider = props => {
    const [movieDetails, setMovieDetails] = useState(initialState);
    const backgroundImage = `linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%),url('${movieDetails.backdrop_path}')`;
    document.body.style.backgroundImage = backgroundImage;

    const setMovieDetailsHandler = useCallback(props => {
        const genres = Object.keys(props.genres).map(key => props.genres[key].name);
        const production_companies = Object.keys(props.production_companies).map(key => props.production_companies[key].name);
        setMovieDetails({
            id: props.id,
            poster_path: `https://image.tmdb.org/t/p/w500/${props.poster_path}`,
            backdrop_path: `https://image.tmdb.org/t/p/original/${props.backdrop_path}`,
            title: props.original_title,
            tagline: props.tagline,
            overview: props.overview,
            genres: genres,
            production_companies: production_companies,
            release_date: props.release_date,
            runtime: props.runtime,
            revenue: props.revenue,
            vote_average: props.vote_average
        });
    }, []);

    return (
        <MovieContext.Provider value={{ movieDetails: movieDetails, setMovieDetails: setMovieDetailsHandler }}>
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvider;
