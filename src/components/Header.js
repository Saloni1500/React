import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Sign In");
  const mystyle = {
    textDecoration: "none",
    listStyleType: "none",
    color: "black",
    cursor: "pointer",
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} width="120"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" style={mystyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={mystyle}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" style={mystyle}>
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="sign-in"
            onClick={() => {
              btnName === "Sign In"
                ? setbtnName("Sign Out")
                : setbtnName("Sign In");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
