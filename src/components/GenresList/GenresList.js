import React, {useState} from 'react';
import {useEffect} from "react";
import {movieService} from "../../services";
import {Link} from "react-router-dom";
import './GenresList.css';

const GenresList = () => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        movieService.getAllGenres()
            .then(value => value.data)
            .then(
                value => {
                    console.log(value);
                    setGenres(value.genres);
                }
            )
    }, []);


    return (
        <div className={'genres-container'}>
            {genres.length > 0 && genres.map(genre => (
                <div className={'genre-block'}>
                    <Link to={ `/genres/${genre.id}`}>
                        {genre.name}
                    </Link>

                </div>)
            )}
        </div>
    );
};

export default GenresList;