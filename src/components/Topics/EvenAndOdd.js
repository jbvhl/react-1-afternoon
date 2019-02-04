import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ``
        }
    }

    handleInput(value) {
        this.setState({userInput: value})
    }

    assignEvenAndOdds(userInput) {
        let arr = userInput.split('');
        let evens = [];
        let odds = [];

        arr.filter((el, i, arr) => {
            arr[i] % 2 === 0 ? evens.push(Number(el)) : odds.push(Number(el));
            return (evens, odds);
        })
        this.setState({evenArray: evens, oddArray: odds});
    }

    render() {
        return (
        <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={(e) => this.handleInput(e.target.value)}/>
        <button className='confirmationBox' onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
        <span className='resultsBox'> Evens: {JSON.stringify(this.state.evenArray)} </span>
        <span className='resultsBox'> Odds: {JSON.stringify(this.state.oddArray)}</span>
        </div>
        )
    }
}

export default EvenAndOdd;