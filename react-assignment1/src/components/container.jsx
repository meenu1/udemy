import React, { Component } from 'react';
import img from "./images";

class Container extends Component {
    state = {};
    render() {
        console.log(img);
        return (
            <div>

                {Object.keys(img).map(val =>
                    <div>
                        <img key={val} alt="Meenu" src={img[val]} />
                        <div>
                            <span className="badge badge-light">4</span>
                            <span onClick={props.handleClick}>Add to cart</span>
                            <span className="badge"></span>
                        </div>

                    </div>

                )}

            </div>
        );
    }
}

export default Container;