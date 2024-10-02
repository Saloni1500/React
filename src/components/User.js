import { useEffect, useState } from "react";

const User = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("React");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>Count = {count}</h2>
      <h2>Count = {count2}</h2>
      <p>Name: {props.name}</p>
      <p>Location: {props.location}</p>
      <p>Contact: @Saloni1500</p>
    </div>
  );
};
export default User;
