import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import MovieDetailResult, { MovieType } from "../partials/movies/MovieDetailResult";

import Css from "./MovieDetail.module.scss";

import { setText } from "../../datastores/DatastoreMessages";
import InternalApi from "../../util/InternalApi";

// MovieDetail

/*
 * Movie Detail Page to retrieve and show the information of a selected Movie
 */

const MovieDetail:React.FC<{}> = () => {

    const location = useLocation();

    const urlParams = location.state;

    const dispatch = useDispatch();

    const [loading, setLoading] = useState<boolean>(true);

    const [movie, setMovie] = useState<MovieType>({
        id: undefined,
        title: "",
        tagline: "",
        posterUrl: "",
        releaseDate: "",
        popularity: undefined,
        overview: ""
    });

    useEffect(() => {
        let movieId:number = undefined;
        if(urlParams && urlParams.hasOwnProperty("movieId")) {
            movieId = urlParams.movieId;
        }

        if(!movieId) {
            setLoading(false);
            return;
        }

        getMovieDetailResult(movieId);
    }, [urlParams]);

    const getMovieDetailResult = (movieId:number) => {
        setLoading(true);
        const internalApi:InternalApi = new InternalApi();

        internalApi.init()
            .setUrl(`movies/${movieId}`);

        internalApi.send()
            .then((resolve:any) => {
                setMovie((prev) => {
                    const movie:MovieType = {
                        id: resolve.results.movie.id,
                        title: resolve.results.movie.title,
                        tagline: resolve.results.movie.tagline,
                        posterUrl: resolve.results.movie.posterUrl,
                        releaseDate: resolve.results.movie.releaseDate,
                        popularity: resolve.results.movie.popularity,
                        overview: resolve.results.movie.overview
                    };
                    return movie;
                });
                setLoading(false);
            })
            .catch((reject:any) => {
                dispatch(setText("Unable to Retrieve Result"));
                setLoading(false);
            });
    }

    return(
        <div className={Css["movieDetail"]}>
            {
                (!loading) && (
                    <MovieDetailResult
                        movie={movie}
                    />
                )
            }
        </div>
    );

}

// Export

export default MovieDetail;
