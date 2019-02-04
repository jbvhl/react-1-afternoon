import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilterArray: [{name: 'Larry', age: 34, gender: 'male', hairColor: 'black'}, 
            {name: 'Sarah', age: 23, gender: 'female'},
            {name: 'Lipe', age: 14, gender: 'male', eyeColor: 'blue'}],

            userInput: ``,
            filteredArray: []
        }
    }

    updateInput(value) {
        this.setState({userInput: value});
    }

    handleFiltered(arr) {
        let unFilterArray = this.state.unFilterArray;
        let filteredArray = [];

        for (let i = 0; i < unFilterArray.length; i++) {
            if (unFilterArray[i].hasOwnProperty(arr)){
            filteredArray.push(unFilterArray[i]);
            }
        }   

        this.setState({filteredArray: filteredArray});
    }

    render() {
        return (
        <div className='puzzleBox filterObjecPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilterArray, null, 10)}</span>
        <input className='inputLine' onChange={e => this.updateInput(e.target.value)}/>
        <button className='confirmationBox' onClick={() => this.handleFiltered(this.state.userInput)}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
        </div>
        )
    }
}

export default FilterObject;