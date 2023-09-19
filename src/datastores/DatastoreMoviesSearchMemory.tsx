import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MoviesType } from "../components/partials/movies/MoviesSearchResults";
import { PageInfoType } from "../components/partials/controls/Paginator";

// DatastoreMoviesSearchMemory

/*
 * Redux Datastore for handling memory of the users most recent Movie Search Results
 */

type StateType = {
    movieTitle:string,
    movies:MoviesType,
    pageInfo:PageInfoType
}

const stateInit:StateType = {
    movieTitle: null,
    movies: [],
    pageInfo: {
        totalPerPage: 20,
        page: 1,
        totalPages: 0,
        totalResults: 0
    }
}

const DatastoreMoviesSearchMemory = createSlice({
    name: "moviesSearchMemory",
    initialState: stateInit,
    reducers: {
        setMovieTitleMemory(state:StateType, action:PayloadAction<string>) {
            state.movieTitle = action.payload;
        },
        setMoviesMemory(state:StateType, action:PayloadAction<MoviesType>) {
            state.movies = [...action.payload];
        },
        setPageInfoMemory(state:StateType, action:PayloadAction<PageInfoType>) {
            state.pageInfo = {...action.payload};
        }
    }
});

// Export

export default DatastoreMoviesSearchMemory;
export const { setMovieTitleMemory, setMoviesMemory, setPageInfoMemory } = DatastoreMoviesSearchMemory.actions;
