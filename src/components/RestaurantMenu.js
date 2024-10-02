import RatingSVG from "./RatingSVG";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const {
    ResInfo = {},
    isLoading,
  } = useRestaurantMenu(resId);
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = ResInfo?.cards?.[2]?.card?.card?.info || {};

  const { slaString } = ResInfo?.cards?.[2]?.card?.card?.info?.sla || {};

  const { itemCards } =
    ResInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  if (isLoading) {
    return <MenuShimmer />;
  }

  return (
    <div className="menu">
      <h1>{name}</h1>

      <div className="rating-container">
        <div className="resto-menu-info">
          <div className="svg-menu">
            <RatingSVG />
          </div>
          <div className="rating-menu">
            <p>
              {avgRatingString} ({totalRatingsString})
              <span className="cost-txt">{costForTwoMessage}</span>
            </p>
          </div>
        </div>
        <div className="cuisine-menu">
          <p>{Array.isArray(cuisines) ? cuisines.join(", ") : " "}</p>
        </div>
        <div className="outlet">
          <p>
            Outlet <span className="out-txt">{areaName}</span>
          </p>
        </div>
        <div className="time">
          <p>{slaString.toLowerCase()}</p>
        </div>
      </div>

      <div className="menu-div">
        <p className="menu-txt">MENU</p>
      </div>
      <div className="menu-card">
        {itemCards.map((item) => (
          <MenuCard key={item.card.info.id} menuCard={item} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
