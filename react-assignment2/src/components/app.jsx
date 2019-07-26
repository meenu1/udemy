import React, { Component } from 'react';
import ValidationComponent from "./validationComponent";
import CharComponent from "./charComponent";
import './style.css';

class App extends Component {

    state = {
        text: "Meenu"
    };

    changeHandler = (event) => {
        this.setState({ text: event.target.value });
    };

    clickHandler = (event, index) => {
        let text = this.state.text.split("");
        text.splice(index, 1);

        this.setState({ text: text.join("") });
    };

    render() {
        const textTemp = this.state.text.split("");
        const charComp = textTemp.map((t, index) => {

            return <CharComponent key={index} char={t} click={(event) => this.clickHandler(event, index)} />
        });

        return (
            <React.Fragment>
                <input type="text" onChange={this.changeHandler} value={this.state.text} />
                <ValidationComponent length={this.state.text.length} />
                {charComp}
            </React.Fragment>

        )
    }
}
export default App;