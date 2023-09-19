import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Css from "./MessageButton.module.scss";

// MessageButton

/*
 * Component for Message Button to close the Messages Component
 */

type MessageButtonType = {
    onClick?:(event:React.MouseEvent) => void
}

const MessageButton:React.FC<MessageButtonType> = (props:MessageButtonType) => {

    return(
        <button className={Css["messageButton"]}
            onClick={props.onClick}
        >
            <div>
                <div>
                    <FontAwesomeIcon
                        icon={faXmark}
                    />
                </div>
            </div>
        </button>
    );

}

// Export

export default MessageButton;
