import React from 'react';
class Quizz extends React.Component{

    render(){
        return(
            <div>
                <button onClick={this.props.quizStart}>Start</button>
                <div className="myQuestion"></div>
            </div>
        )
    }
}
export default Quizz
