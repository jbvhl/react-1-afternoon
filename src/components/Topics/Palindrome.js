import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ``,
            palindrome: ``
        }
    }

    updateInput(value) {
        this.setState({userInput: value});
    }

    checkPalindrome(userInput) {
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('').reverse().join('');

        if (forwards === backwards) {
            this.setState({palindrome: 'true'});
        } else {
            this.setState({palindrome: 'false'});
        }
    }

    render() {
        return (
        <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input className='inputLine' onChange={(e) => this.updateInput(e.target.value)}/>
        <button className='confirmationButton' onClick={() => this.checkPalindrome(this.state.userInput)}>Check</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
        </div>
        )
    }
}

export default Palindrome;