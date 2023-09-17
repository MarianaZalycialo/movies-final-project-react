import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {movieService} from "../../services";

import "./MovieDetails.css";
import Starts_rate from "../utilies/stars_rate/starts_rate";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        movieService.getOne(id)
            .then(value => value.data)
            .then(
                value => {
                    console.log(value);
                    setMovie(value)}
            )
    }, []);


    return (
        (movie &&
        <div className={'movie-details'}>
            <img className='img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <div>
                <Starts_rate value={movie.vote_average}/>
            </div>
            <div className='genres'>{movie.genres.map((genre) =>
                <Link className='genre' to={ `/genres/${genre.id}`}>
                    {genre.name}
                </Link>
            )}</div>
            <div>{movie.release_date}</div>
            <div>{Math.floor(movie.runtime / 60)}:{movie.runtime % 60}</div>
        </div>)
    );
};

export default MovieDetails;
