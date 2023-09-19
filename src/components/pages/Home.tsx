import React from "react";

import MainWrapper from "../partials/generic/MainWrapper";

import Css from "./Home.module.scss";

// Home

/*
 * Home Page to show a brief introduction
 */

const Home:React.FC<{}> = () => {

    return(
        <div className={Css["home"]}>
            <MainWrapper>
                <div className={Css["content"]}>
                    <Welcome />
                </div>
            </MainWrapper>
        </div>
    );

}

// Welcome

const Welcome:React.FC<{}> = () => {

    return(
        <div className={Css["welcome"]}>
            <div className={Css["title"]}>
                <p>Assessment Web Application</p>
            </div>

            <div className={Css["info"]}>
                <p>
                    A Web Application to serve as an example implementation of allowing
                    users to interact with an External API.
                    <br /><br />
                    The External API is being managed by a NodeJs Backend using Express
                    and Typescript. This Web User Interface serves as the Frontend to
                    access the Backend Endpoints and is a NodeJs Frontend using ReactJs
                    and Typescript.
                </p>
            </div>

            <div className={Css["end"]}>
                <p>Developed by Trent Hawke</p>
            </div>
        </div>
    );

}

// Export

export default Home;
