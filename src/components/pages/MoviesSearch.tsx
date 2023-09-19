import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../partials/controls/SearchBar";
import MoviesSearchResults, { MoviesType } from "../partials/movies/MoviesSearchResults";
import Paginator, { PageInfoType } from "../partials/controls/Paginator";

import Css from "./MoviesSearch.module.scss";

import { RootState } from "../../datastores/Datastore";
import { setText } from "../../datastores/DatastoreMessages";
import { setMovieTitleMemory, setMoviesMemory, setPageInfoMemory } from "../../datastores/DatastoreMoviesSearchMemory";
import InternalApi from "../../util/InternalApi";

// MoviesSearch

/*
 * Movies Search Page to retrieve and show a list of all found Movies
 */

const MoviesSearch:React.FC<{}> = () => {

    const dispatch = useDispatch();

    const movieTitleMemory:string = useSelector((state:RootState) => {
        return state.moviesSearchMemory.movieTitle;
    });
    const [movieTitle, setMovieTitle] = useState<string>(movieTitleMemory);
    const [movieTitlePrev, setMovieTitlePrev] = useState<string>(null);

    const moviesMemory:MoviesType = useSelector((state:RootState) => {
        return state.moviesSearchMemory.movies;
    });
    const [movies, setMovies] = useState<MoviesType>([...moviesMemory]);

    const pageInfoMemory:PageInfoType = useSelector((state:RootState) => {
        return state.moviesSearchMemory.pageInfo;
    });
    const [pageInfo, setPageInfo] = useState<PageInfoType>({...pageInfoMemory});

    const handleSearch = (event:React.MouseEvent, movieTitle:string) => {
        if(movieTitle === movieTitlePrev) { return; }

        getMoviesSearchResults(movieTitle, 1);
    }

    const handlePrev = (event:React.MouseEvent) => {
        if(pageInfo.totalResults === 0) { return; }
        let page:number = pageInfo.page - 1;
        if(page < 1) { page = pageInfo.totalPages; }

        getMoviesSearchResults(movieTitle, page);
    }

    const handleNext = (event:React.MouseEvent) => {
        if(pageInfo.totalResults === 0) { return; }
        let page:number = pageInfo.page + 1;
        if(page > pageInfo.totalPages) { page = 1; }

        getMoviesSearchResults(movieTitle, page);
    }

    const getMoviesSearchResults = (movieTitle:string, page:number) => {
        const internalApi:InternalApi = new InternalApi();

        internalApi.init()
            .setUrl(`${process.env.REACT_APP_BACKEND_URL}search/${movieTitle}/${page}`);

        internalApi.send()
            .then((resolve:any) => {
                setMovieTitle(movieTitle);
                setMovieTitlePrev(movieTitle);

                setMovies((prev) => {
                    const movies:MoviesType = resolve.results.movies.map((movie:any) => {
                        return {
                            id: movie.id,
                            title: movie.title,
                            posterUrl: movie.posterUrl,
                            releaseYear: movie.releaseYear
                        };
                    });
                    return movies;
                });

                setPageInfo((prev) => {
                    const pageInfo:PageInfoType = {
                        totalPerPage: 20,
                        page: page,
                        totalPages: resolve.results.totalPages,
                        totalResults: resolve.results.totalResults
                    };
                    return pageInfo;
                });
            })
            .catch((reject:any) => {
                dispatch(setText("Unable to Retrieve Result(s)"));
            });
    }

    useEffect(() => {
         dispatch(setMovieTitleMemory(movieTitle));
         dispatch(setMoviesMemory(movies));
         dispatch(setPageInfoMemory(pageInfo));
    }, [dispatch, movieTitle, movies, pageInfo]);

    return(
        <div className={Css["moviesSearch"]}>
            <SearchBar
                label={"Movie"}
                placeholder={"Search by Movie Title..."}
                onClick={(event:React.MouseEvent, movieTitle:string) => { handleSearch(event, movieTitle); }}
            />

            <MoviesSearchResults
                movies={movies}
            />

            <Paginator
                pageInfo={pageInfo}
                onClickPrev={(event:React.MouseEvent) => { handlePrev(event); }}
                onClickNext={(event:React.MouseEvent) => { handleNext(event); }}
            />
        </div>
    );

}

// Export

export default MoviesSearch;
