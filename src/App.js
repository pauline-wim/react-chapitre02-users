import React from "react";
import Users from "./users.json";
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter";
// CSS
import './App.css';

class App extends React.Component {
  
  constructor() {
		super();

		this.state = {
      Users,
      count: 10,
    };

    this.substract = this.substract.bind(this);
    this.increment = this.increment.bind(this);
  };

  substract() {
    this.setState((prevState) => ({ 
      count: prevState.count - 1,
    }));
  };

  increment() {
    this.setState((prevState) => ({ 
      count: prevState.count + 1, 
    }));
  };
  
  render() {
    return (
      <main>
        <section className="counter">
          <h1>User counter:</h1>
          <Counter
            count={this.state.count} 
            substract={this.substract} 
            increment={this.increment}
          />
          <p>Here are {this.state.count} users.</p>
        </section>
        <section className="user-info">
          {this.state.Users.map((user, index) => {
            index = this.setState.count
            return (
              <UserInfo
                key={user.id}
                name={user.name}
                email={user.email}
                website={user.website}
              />
            )
          })}
        </section>
      </main> 
    ) 
  };

};

export default App;
