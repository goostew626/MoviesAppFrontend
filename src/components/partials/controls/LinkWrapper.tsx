import React, { HTMLProps, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setText } from "../../../datastores/DatastoreMessages";

// LinkWrapper

/*
 * Component for wrapping any other Child Components in a Link
 */

type LinkWrapperType = HTMLProps<HTMLDivElement> & {
    className?:string,
    url:string,
    urlParams?:any,
    children:ReactNode
}

const LinkWrapper:React.FC<LinkWrapperType> = (props:LinkWrapperType) => {

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
            {props.children}
        </Link>
    );

}

// Export

export default LinkWrapper;
