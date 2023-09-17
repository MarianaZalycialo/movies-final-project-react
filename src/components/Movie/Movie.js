import React from 'react';
import './Movie.css';
import {Link} from "react-router-dom";

const Movie = (props) => {
    const {movie} = props;
    return (
        <div className={'movie-box'} >
            <Link to={ `/movie-details/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            </Link>
        </div>
    );
};

export default Movie;