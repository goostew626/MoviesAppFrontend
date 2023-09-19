import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";

import Css from "./MainButton.module.scss";

// MainButton

/*
 * Component for Main Button with optional Text and optional Icon
 */

type MainButtonType = {
    text?:string,
    icon?:string,
    onClick?:(event:React.MouseEvent) => void
}

const MainButton:React.FC<MainButtonType> = (props:MainButtonType) => {

    return(
        <button className={Css["mainButton"]}
            onClick={props.onClick}
        >
            <div>
                {
                    (props.text) && (
                        <div>
                            <span>{props.text}</span>
                        </div>
                    )
                }
                {
                    (props.icon) && (
                        <div>
                            <ButtonIcon name={props.icon} />
                        </div>
                    )
                }
            </div>
        </button>
    );

}

// ButtonIcon

type ButtonIconType = {
    name:string
}

const ButtonIcon:React.FC<ButtonIconType> = (props:ButtonIconType) => {

    let icon;
    switch(props.name) {
        case "Search":
            icon = faMagnifyingGlass;
            break;
        case "View":
            icon = faEye;
            break;
        case "Prev":
            icon = faCaretLeft;
            break;
        case "Next":
            icon = faCaretRight;
            break;
        case "Back":
            icon = faArrowLeft;
            break;
        default:
            icon = faBug;
            break;
    }

    return(
        <FontAwesomeIcon
            icon={icon}
        />
    );

}

// Export

export default MainButton;
