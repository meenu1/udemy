import React, { Component } from 'react';
import UserInput from "./userInput";
import UserOutput from "./userOutput";

class App extends Component {

    state = {
        username: "Meenu"
    };

    changeUsername = (event) => {
        this.setState({ username: event.target.value });
    };

    render() {
        return (
            <React.Fragment>
                <UserInput change={this.changeUsername.bind(this)} username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
            </React.Fragment>

        )
    }
}
export default App;