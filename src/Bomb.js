// your Bomb code here!
import React from 'react';

 class Bomb extends React.Component{
    constructor(props){
        super(props)
        if (props.initialCount > 0) {
            this.state = {
                secondsLeft: this.props.initialCount,
                message: ` seconds left before I go boom!`
                }
        } else {
            this.state = {
                message: "Boom!"

            }
        }
    }
    
    render() {
        return (
            <div>
               {this.state.secondsLeft}{this.state.message}
            </div>
        )
    }
}

export default Bomb