import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import MainWrapper from "../generic/MainWrapper";
import MainButton from "../controls/MainButton";

import Css from "./SearchBar.module.scss";

import { setText } from "../../../datastores/DatastoreMessages";

// SearchBar

/*
 * Component for handling Text Search input and basic validation
 */

type SearchBarType = {
    className?:string,
    label:string,
    placeholder:string,
    onClick?:(event:React.MouseEvent, inputSearchValue:string) => void
}

const SearchBar:React.FC<SearchBarType> = (props:SearchBarType) => {

    const dispatch = useDispatch();

    const inputSearchRef = useRef<HTMLInputElement | null>(null);

    const handleSearch = (event:React.MouseEvent) => {
        const inputSearchValue:string = inputSearchRef.current?.value ?? null;

        dispatch(setText(null));
        if(!inputSearchValue || inputSearchValue.trim() === "") {
            dispatch(setText("Movie Title is Required"));
            return;
        }

        props.onClick(event, inputSearchValue);
    }

    return(
        <div className={Css["searchBar"]}>
            <MainWrapper>
                <div className={Css["content"]}>
                    <div className={Css["label"]}>
                        <p>{props.label}</p>
                    </div>

                    <div className={Css["input"]}>
                        <input
                            ref={inputSearchRef}
                            type="text"
                            placeholder={props.placeholder}
                        ></input>
                    </div>

                    <div className={Css["button"]}>
                        <MainButton
                            text={"Search"}
                            icon={"Search"}
                            onClick={(event:React.MouseEvent) => { handleSearch(event); }}
                        />
                    </div>
                </div>
            </MainWrapper>
        </div>
    );

}

// Export

export default SearchBar;
