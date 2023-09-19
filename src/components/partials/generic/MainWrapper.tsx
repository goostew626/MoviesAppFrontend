import React, { HTMLProps, ReactNode } from "react";

import Css from "./MainWrapper.module.scss";

// MainWrapper

/*
 * Component to handle consistent positioning of other Main Components
 */

type MainWrapperType = HTMLProps<HTMLDivElement> & {
    className?:string,
    children:ReactNode
}

const MainWrapper:React.FC<MainWrapperType> = (props:MainWrapperType) => {

    const classNames:string[] = [Css["mainWrapper"]];
    if(props.className) { classNames.push(props.className); }

    return(
        <div className={classNames.join(" ")}>
            {props.children}
        </div>
    );

}

// Export

export default MainWrapper;
