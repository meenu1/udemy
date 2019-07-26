import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{

    state = {
        count:0,
        counters:[{
            id:1, value:4
            },{
            id:2, value:1
            },{
            id:3, value:2
            },{
            id:4, value:3
        }]
    };

    handleDelete = counterId => {

        let resultId = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters : resultId});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        debugger
        counters[index].value++;
        this.setState({counters : counters});
    };

    reset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({counters: counters});
    };

    render(){
        return (
            
            <div>
                <button className="btn btn-primary btn-sm" onClick={this.reset}>Reset</button>
                {this.state.counters.map(counters=>
                <Counter key={counters.id}
                 onDelete = { this.handleDelete } 
                 counters={counters}
                 onIncrement = { this.handleIncrement }

                 />)}
                
            </div>
        )
    }
}

export default Counters;