import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <div className="err">
        <div className="error-status">{err.status}</div>
        <div className="lost">It looks like you're lost...</div>
        <Link to="/">
          <button className="home-btn">GO BACK HOME</button>
        </Link>
      </div>
    </div>
  );
};
export default Error;
