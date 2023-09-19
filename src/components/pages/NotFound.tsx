import React from "react";

import MainWrapper from "../partials/generic/MainWrapper";

import Css from "./NotFound.module.scss";

// NotFound

/*
 * Not Found Page to cater for all non existent locations
 */

const NotFound:React.FC<{}> = () => {

    return(
        <div className={Css["notFound"]}>
            <MainWrapper>
                <div className={Css["text"]}>
                    <p>Not Found</p>
                </div>
            </MainWrapper>
        </div>
    );

}

// Export

export default NotFound;
