import React from "react";

const ValidationComponent = props => {
    let result = "";
    if (props.length < 5) {
        result = "Text too short";
    } else {
        result = "Text long enough";
    }
    return (
        <div>
            <p>
                Length of text is {props.length}.
            </p>
            <span>{result}</span>

        </div>

    )
};

export default ValidationComponent;