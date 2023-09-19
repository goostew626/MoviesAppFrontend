import React from "react";

import MainWrapper from "../generic/MainWrapper";
import LinkWrapper from "../controls/LinkWrapper";
import MainButton from "../controls/MainButton";

import Css from "./MovieDetailResult.module.scss";

type MovieType = {
    id:number,
    title:string,
    tagline:string,
    posterUrl:string,
    releaseDate:string,
    popularity:number,
    overview:string
}

// MovieDetailResult

/*
 * Component for presenting the information of a selected Movie
 */

type MovieDetailResultType = {
    movie:MovieType
}

const MovieDetailResult:React.FC<MovieDetailResultType> = (props:MovieDetailResultType) => {

    return(
        <div className={Css["movieDetailResult"]}>
            <MainWrapper>
                {
                    (props.movie.id) ? (
                        <MovieResult
                            movie={props.movie}
                        />
                    ) : (
                        <NoMovieResult />
                    )
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
                        title={"Tagline"}
                        value={props.movie.tagline}
                    />

                    <TextRow
                        title={"Released"}
                        value={props.movie.releaseDate.toString()}
                    />

                    <TextRow
                        title={"Popularity"}
                        value={props.movie.popularity.toString()}
                    />
                </div>

                <div className={Css["overview"]}>
                    <p>{props.movie.overview}</p>
                </div>

                <div className={Css["button"]}>
                    <LinkWrapper
                        url={"/moviesSearch"}
                    >
                        <MainButton
                            text={"Back"}
                            icon={"Back"}
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

// NoMovieResult

const NoMovieResult:React.FC<{}> = () => {

    return(
        <div className={Css["noMovie"]}>
            <p>No Movie To Show</p>
        </div>
    );

}

// Export

export default MovieDetailResult;
export type { MovieType };
