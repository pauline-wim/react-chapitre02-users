import React from "react";

class UserInfo extends React.Component {

    render() {
        return (
            <article>
                <p><span>Name:</span> {this.props.name}</p>
                <p><span>Email:</span> <a href={`mailto:${this.props.email}`}>{this.props.email}</a></p>
                <p><span>Website:</span> {this.props.website}</p>
            </article>
        )
    };
  
  };
  
export default UserInfo;
  