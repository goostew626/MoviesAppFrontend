import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainMenu from "./partials/menus/MainMenu";
import Home from "./pages/Home";
import MoviesSearch from "./pages/MoviesSearch";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

// Router

/*
 * Handle the Routes for all of the Navigation
 */

const Router:React.FC<{}> = () => {

    return(
        <BrowserRouter>
            <MainMenu />
            <MainRoutes />
        </BrowserRouter>
    );

}

// MainRoutes

const MainRoutes:React.FC<{}> = () => {

    return(
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/moviesSearch"
                element={<MoviesSearch />}
            />

            <Route
                path="/movieDetail"
                element={<MovieDetail />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );

}

// Export

export default Router;
