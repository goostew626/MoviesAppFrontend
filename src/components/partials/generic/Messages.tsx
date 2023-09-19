import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MessageButton from "../controls/MessageButton";

import Css from "./Messages.module.scss";

import { RootState } from "../../../datastores/Datastore";
import { setText } from "../../../datastores/DatastoreMessages";

// Messages

/*
 * Component to handle user information box
 */

const Messages:React.FC<{}> = () => {

    const messagesText:string = useSelector((state:RootState) => {
        return state.messages.text;
    });

    return(
        <>
            {
                (messagesText) && (
                    <div className={Css["messages"]}>
                        <Notification
                            text={messagesText}
                        />
                    </div>
                )
            }
        </>
    );

}

// Notification

type NotificationType = {
    text:string
}

const Notification:React.FC<NotificationType> = (props:NotificationType) => {

    const dispatch = useDispatch();

    const handleClear = (event:React.MouseEvent) => {
        dispatch(setText(null));
    }

    return(
        <div className={Css["notification"]}>
            <div className={Css["text"]}>
                <p>{props.text}</p>
            </div>

            <div className={Css["button"]}>
                <MessageButton
                    onClick={(event:React.MouseEvent) => { handleClear(event); }}
                />
            </div>
        </div>
    );

}

// Export

export default Messages;
