import { CDN_URL } from "../utils/constants";
import RatingSVG from "./RatingSVG";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.info;

  const { slaString } = resData?.info?.sla;
  return (
    <div className="resto-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="resto-logo"
        alt="resto-img"
        height={182}
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="headbox">
        <span className="resto-name">{name}</span>
      </div>
      <RatingSVG />
      <div className="txt">
        <span className="text">{avgRating}</span>
        {slaString}
      </div>
      <div id="cuisine" className="fontstyle">
        {cuisines.join(", ")}
      </div>
      <div id="address" className="fontstyle">
        {areaName}
      </div>
    </div>
  );
};

export default RestaurantCard;
