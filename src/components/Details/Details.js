import classes from './Details.module.css';
import { MovieContext } from '../../context/movie-context';
import { useContext } from 'react';

const Details = props => {
    const context = useContext(MovieContext);
    const { movieDetails } = context;

    return (<main className={classes.Main}>
        <img className={classes.MovieImg} src={movieDetails.poster_path} alt="Movie Name" />
        <div className={classes.Details}>
            <span className={classes.MovieTitle}>{movieDetails.title}</span>
            <span className={classes.TagLine}>{movieDetails.tagline}</span>
            <p className={classes.MovieDetails}>{movieDetails.overview}</p>
            <br />
            <span className={classes.TagLine}>{movieDetails.genres.join(', ')}</span>
            <span className={classes.AdditionalDetails}>{movieDetails.production_companies.join(', ')}</span>
            <br /><br />
            <div className={classes.Row}>
                <div className={classes.Column}>
                    <span className={classes.AdditionalDetailsTagline}>Original Release:</span>
                    <span className={classes.TagLine}>{movieDetails.release_date}</span>
                    <br />
                    <span className={classes.AdditionalDetailsTagline}>Box Office:</span>
                    <span className={classes.TagLine}>${movieDetails.revenue}</span>
                </div>
                <div className={classes.Column}>
                    <span className={classes.AdditionalDetailsTagline}>Running Time:</span>
                    <span className={classes.TagLine}>{movieDetails.runtime} mins</span>
                    <br />
                    <span className={classes.AdditionalDetailsTagline}>Vote Average:</span>
                    <span className={classes.TagLine}>{movieDetails.vote_average} / 10</span>
                </div>
                <div />
            </div>
        </div>
    </main >);
}

export default Details;
