import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    page: 1,
}

const slice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            const {results, page} = action.payload
            state.movies = results
            state.page = page
        }
    }
})

const {reducer: moviesReducer, actions} = slice;

const moviesActions = {
    ...actions
}

export {
    moviesReducer,
    moviesActions
}