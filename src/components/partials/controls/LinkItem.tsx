import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setText } from "../../../datastores/DatastoreMessages";

// LinkItem

/*
 * Component for simple Text Links
 */

type LinkItemType = {
    className?:string,
    url:string,
    urlParams?:any,
    text:string
}

const LinkItem:React.FC<LinkItemType> = (props:LinkItemType) => {

    const dispatch = useDispatch();

    const handleClick = (event:React.MouseEvent) => {
        dispatch(setText(null));
    }

    return(
        <Link className={props.className || undefined}
            to={props.url}
            state={props.urlParams}
            onClick={(event:React.MouseEvent) => { handleClick(event); }}
        >
            {props.text}
        </Link>
    );

}

// Export

export default LinkItem;
