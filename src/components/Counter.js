import React from "react";

class Counter extends React.Component {
    render() {
        const counterLimit = this.props.count;
        return (
            <div className="container">
    
                {counterLimit === 0 ? (
                    <button className="btn red" onClick={console.log("The counter doesn't go below 0.")}>-</button>
                    ) : (
                    <button className="btn red" onClick={this.props.substract}>-</button>
                    )
                }
                <h2>{this.props.count}</h2>

                {counterLimit >= 10 ? (
                    <button className="btn green" onClick={console.log("The counter doesn't go over 10.")}>+</button>
                    ) : (
                    <button className="btn green" onClick={this.props.increment}>+</button>
                    )
                }

            </div>
        );
    };
};
  
export default Counter;