import React, {Component} from 'react';

class Bomb extends Component{
    constructor(secondsLeft){
        super();
        console.log(secondsLeft)
        this.state = {
            secondsLeft: secondsLeft.initialCount
        }

    }
    render(){
        if(this.state.secondsLeft === 0){
            return 'Boom!'
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
}

export default Bomb;