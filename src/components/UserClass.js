import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "DummyName",
        location: "DummyLocation",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Saloni1500");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log(" About React");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component unmount");
  }
  render() {
    const { name, location, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Contact: @{login}</p>
      </div>
    );
  }
}
export default UserClass;
