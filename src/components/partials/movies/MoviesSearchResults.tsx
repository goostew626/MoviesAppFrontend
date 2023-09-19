import React from "react";

import MainWrapper from "../generic/MainWrapper";
import LinkWrapper from "../controls/LinkWrapper";
import MainButton from "../controls/MainButton";

import Css from "./MoviesSearchResults.module.scss";

type MoviesType = MovieType[]

type MovieType = {
    id:number,
    title:string,
    posterUrl:string,
    releaseYear:number
}

// MoviesSearchResults

/*
 * Component for presenting all of the found Movies
 */

type MoviesSearchResultsType = {
    movies:MoviesType
}

const MoviesSearchResults:React.FC<MoviesSearchResultsType> = (props:MoviesSearchResultsType) => {

    return(
        <div className={Css["moviesSearchResults"]}>
            <MainWrapper>
                {
                    props.movies.map((movie, idx) => (
                        <MovieResult
                            key={idx}
                            movie={movie}
                        />
                    ))
                }
            </MainWrapper>
        </div>
    );

}

// MovieResult

type MovieResultType = {
    movie:MovieType
}

const MovieResult:React.FC<MovieResultType> = (props:MovieResultType) => {

    const cssStyle = {
        "--poster-image": `url(${props.movie.posterUrl})`
    } as React.CSSProperties;

    return(
        <div className={Css["movie"]}>
            <div className={Css["poster"]} style={cssStyle}>
                <div></div>
            </div>

            <div className={Css["info"]}>
                <div className={Css["text"]}>
                    <TextRow
                        title={"Title"}
                        value={props.movie.title}
                    />

                    <TextRow
                        title={"Released"}
                        value={props.movie.releaseYear.toString()}
                    />
                </div>

                <div className={Css["button"]}>
                    <LinkWrapper
                        url={"/movieDetail"}
                        urlParams={{movieId: props.movie.id}}
                    >
                        <MainButton
                            text={"View"}
                            icon={"View"}
                        />
                    </LinkWrapper>
                </div>
            </div>
        </div>
    );

}

// TextRow

type TextRowType = {
    title:string,
    value:string
}

const TextRow:React.FC<TextRowType> = (props:TextRowType) => {

    return(
        <div>
            <div className={Css["title"]}>
                <p>{props.title}</p>
            </div>

            <div className={Css["value"]}>
                <p>{props.value}</p>
            </div>
        </div>
    );

}

// Export

export default MoviesSearchResults;
export type { MoviesType };
