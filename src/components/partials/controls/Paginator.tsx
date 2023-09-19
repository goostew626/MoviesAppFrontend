import React from "react";

import MainWrapper from "../generic/MainWrapper";
import MainButton from "../controls/MainButton";

import Css from "./Paginator.module.scss";

type PageInfoType = {
    totalPerPage:number,
    page:number,
    totalPages:number,
    totalResults:number
}

// Paginator

/*
 * Component to handle Pagination between Prev and Next as well as providing Page Information
 */

type PaginatorType = {
    pageInfo:PageInfoType,
    onClickPrev:(event:React.MouseEvent) => void,
    onClickNext:(event:React.MouseEvent) => void
}

const Paginator:React.FC<PaginatorType> = (props:PaginatorType) => {

    const getPageInfoDisplay = ():string => {
        if(props.pageInfo.totalResults === 0) { return "No Result(s)"; }

        let offset:number = (props.pageInfo.page - 1) * props.pageInfo.totalPerPage;
        let start:number = offset + 1;
        let end:number = offset + props.pageInfo.totalPerPage;
        let total:number = props.pageInfo.totalResults;

        if(props.pageInfo.page === props.pageInfo.totalPages) { end = props.pageInfo.totalResults; }

        return `${start} to ${end} of ${total}`;
    }

    return(
        <div className={Css["paginator"]}>
            <MainWrapper>
                <div className={Css["content"]}>
                    <div className={Css["left"]}>
                        <div className={Css["button"]}>
                            <MainButton
                                icon={"Prev"}
                                onClick={props.onClickPrev}
                            />
                        </div>
                    </div>

                    <div className={Css["center"]}>
                        <div className={Css["info"]}>
                            <p>{getPageInfoDisplay()}</p>
                        </div>
                    </div>

                    <div className={Css["right"]}>
                        <div className={Css["button"]}>
                            <MainButton
                                icon={"Next"}
                                onClick={props.onClickNext}
                            />
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </div>
    );

}

// Export

export default Paginator;
export type { PageInfoType };
