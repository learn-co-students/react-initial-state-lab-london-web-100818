// your Bomb code here!
import React, { component } from 'react'

class Bomb extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    message = () => this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    


    render () {
        return (
            <div>{this.message()}</div>
        )
    }

}

export default Bomb