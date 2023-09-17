import React from 'react';
import {useSearchParams} from "react-router-dom";
import './MoviePagination.css';

const MoviesPagination = () => {
    const [query ,setQuery] = useSearchParams();

    const prev = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') - 1}));
    }

    const next = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}));
    }

    return (
        <div className={'pagination'}>
            <button disabled={query.get('page') === '1'} onClick={prev}>Previous Page</button>
            <button onClick={next}>Next Page</button>
        </div>
    );
};

export default MoviesPagination;