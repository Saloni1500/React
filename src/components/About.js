import UserClass from "./UserClass";
import React from "react";
import User from "./User";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="abt">
        <h1>About us</h1>
        <UserClass name={"First"} location={"Pune (class)"} />
      </div>
    );
  }
}
export default About;
