import React, { Component } from 'react';
class LeftPanel extends Component {
    state = {}
    render() {
        return (
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                    Fruits {this.props.fruitCount}
                </a>
                <a href="#" class="list-group-item list-group-item-action ">
                    Vegetables {this.props.fruitCount}
                </a>
                <a href="#" class="list-group-item list-group-item-action ">
                    Grocery {this.props.fruitCount}
                </a>
                <a href="#" class="list-group-item list-group-item-action ">
                    Other Options {this.props.fruitCount}
                </a>
            </div>
        );
    }
}

export default LeftPanel;