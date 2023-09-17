import React, {useEffect, useState} from 'react';
import Movie from "../Movie/Movie";
import './MoviesList.css';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {movieService} from "../../services";
import MoviesPagination from "../MoviesPagination/MoviesPagination.js";
import {useParams, useSearchParams} from "react-router-dom";

const MoviesList = (props) => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {movies} = useSelector(state => state.movies)
    const [query, setQuery] = useSearchParams();

    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        console.log(+query.get('page'));
        if(+query.get('page') === 0 && props.type !== 'search') {
            setQuery(prev => ({...prev, page: '1'}) )
        }
    }, [props.type]);

    useEffect(() => {
        if(props.type === 'genres') {
            getByGenres()
        } else {
            getAllMovies()
        }
    }, [query]);
    
    
    const getAllMovies = (searchName) => {
        console.log(+query.get('page'));
        +query.get('page') > 0 && movieService.getAll(+query.get('page'), searchName)
            .then(value => value.data)
            .then(
                value => {
                    console.log(value);
                    dispatch(moviesActions.setMovies(value))}
            )
    }
    
    const getByGenres = () => {
        console.log(+query.get('page'));
        +query.get('page') > 0 && movieService.getByGenres(+query.get('page'), id)
            .then(value => value.data)
            .then(
                value => {
                    console.log(value);
                    dispatch(moviesActions.setMovies(value))}
            )
    }

    const searchMovies = (searchName) => {
        movieService.searchMovie(searchName)
            .then(value => value.data)
            .then(
                value => {
                    console.log(value);
                    dispatch(moviesActions.setMovies(value))}
            )
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        searchMovies(searchInput)
    }, [searchInput])
    
    return (
        <div className={'movieList-page'}>
            {props.type === 'search' && <input
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />}
            <div className={'movieList-container'}>
                {movies && movies.map((movie) => <Movie key={movie.id} movie={movie}/>)}
            </div>
            {props.type !== 'search' && <MoviesPagination/>}
        </div>
    );
};

export default MoviesList;