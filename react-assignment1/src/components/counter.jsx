import React, { Component } from 'react';
class Counter extends Component {

    render() { 
        return (
            <div>
                
                <div>
                    <span className={this.getClass()}>{this.format()}</span>
                    <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counters)}>Increment</button>
                    <button className="btn btn-sm btn-danger m-2" onClick={() => this.props.onDelete(this.props.counters.id)}>Delete</button>
                </div>
            </div>
        );
    }

    getClass(){
        let classes = "badge m-2 badge-";
        return classes + (this.props.counters.value === 0 ? "warning":"primary");
    }
    format(){
        const value = this.props.counters.value;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;