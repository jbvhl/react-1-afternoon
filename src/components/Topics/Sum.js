import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNum1(value) {
        this.setState({number1: Number(value, 10)});
    }
    updateNum2(value) {
        this.setState({number2: Number(value, 10)});
    }

    add(number1, number2) {
        let added = number1 + number2;
        this.setState({sum: added});
    }

    render() {
        return (
        <div className='puzzleBox sumPB'>
            <h4>{this.state.sum}</h4>
            <input className='inputLine' type='number' onChange={(e) => this.updateNum1(e.target.value)}/>
            <input className='inputLine' type='number' onChange={(e) => this.updateNum2(e.target.value)}/>
            <button className='confirmationButton' onClick={() => this.add(this.state.number1, this.state.number2)}>Add</button>
            <span className='resultsBox'>Sum: {this.state.sum}</span>
        </div>
        )
    }
}

export default Sum;