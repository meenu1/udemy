import React from "react";

const CharComponent = props => {
    return (
        <span className="character" onClick={props.click}>{props.char}</span>
    )
};
export default CharComponent;