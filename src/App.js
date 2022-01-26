import React from "react";
import Users from "./users.json";
// CSS
import './App.css';

class App extends React.Component {

  constructor() {
		super();

		this.state = {Users};
  };
  
  
  render() {
    return (
      <div>
        {this.state.Users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.website}</p>
            </div>
          );
        })};
      </div>
    ); 
  };

};

export default App;
