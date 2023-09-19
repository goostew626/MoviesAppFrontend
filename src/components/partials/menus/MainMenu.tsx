import React from "react";

import MainWrapper from "../generic/MainWrapper";
import LinkWrapper from "../controls/LinkWrapper";
import LinkItem from "../controls/LinkItem";

import Css from "./MainMenu.module.scss";
import MainEmblemSvg from "../../../images/application/mainEmblem.svg"

// MainMenu

/*
 * Component for Main Application Menu
 */

const MainMenu:React.FC<{}> = () => {

    return(
        <div className={Css["mainMenu"]}>
            <MainWrapper>
                <div className={Css["content"]}>
                    <Logo />

                    <Nav />
                </div>
            </MainWrapper>
        </div>
    );

}

// Logo

const Logo:React.FC<{}> = () => {

    return(
        <div className={Css["logo"]}>
            <div className={Css["emblem"]}>
                <LinkWrapper
                    url={"/"}
                >
                    <img src={MainEmblemSvg} alt="Main Emblem" />
                </LinkWrapper>
            </div>

            <div className={Css["title"]}>
                <LinkWrapper
                    url={"/"}
                >
                    <p>Movies App</p>
                </LinkWrapper>
            </div>
        </div>
    );

}

// Nav

const Nav:React.FC<{}> = () => {

    return(
        <div className={Css["nav"]}>
            <div>
                <LinkItem
                    url={"/"}
                    text={"Home"}
                />
            </div>

            <div>
                <LinkItem
                    url="/moviesSearch"
                    text={"Search"}
                />
            </div>
        </div>
    );

}

// Export

export default MainMenu;
