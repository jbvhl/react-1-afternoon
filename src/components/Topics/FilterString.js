import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unfilteredArray: ['Hello', 'Pandalanda', 'Spicy', 'Banh Bao', 'Boo', 'Heck', 'Pan', 'Please'],
            userInput: ``,
            filterArray: []
        }
    }

    updateInput(value) {
        this.setState({userInput: value})
    }

    handleFiltered(userInput) {
        let unfiltered = this.state.unfilteredArray;
        let filterArr = [];

        for (let i = 0; i < unfiltered.length; i++) {
            if (unfiltered[i].includes(userInput)) {
                filterArr.push(unfiltered[i]);
            }
        }
        this.setState({filterArray: filterArr});
    }
    render() {
        return (
        <div className='puzzleBox filterStringPB'>
            <h4> Filter String</h4>
            <span className='puzzleText'>Names: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
            <input className='inputLine' onChange={(e) => this.updateInput(e.target.value)}/>
            <button className='confirmationBox' onClick={() =>this.handleFiltered(this.state.userInput)}>Filter</button>
            <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filterArray, null, 10)}</span>
        </div>
        )
    }
}

export default FilterString;