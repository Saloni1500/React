import { useEffect, useState } from "react";
import RatingSVG from "./RatingSVG";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_API_END } from "../utils/constants";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [ResInfo, setResInfo] = useState([]);
  const [Slas, setSlas] = useState([]);
  const [Fee, setFee] = useState([]);
  const [Menu, setMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(MENU_API + resId + MENU_API_END);
      const json = await data.json();
      setResInfo(json?.data?.cards[2]?.card?.card?.info);
      setSlas(json?.data?.cards[2]?.card?.card?.info?.sla);
      setFee(json?.data?.cards[2]?.card?.card?.info?.feeDetails);
      setMenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading === true) return <MenuShimmer />;
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = ResInfo;
  const { message } = Fee;

  const { slaString } = Slas;

  {
    function removeHTMLTags(htmlString) {
      if (!htmlString || typeof htmlString !== "string") {
        return "";
      }
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");
      const textContent = doc.body.textContent || "";
      return textContent.trim();
    }
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
        <div>
          <div className="line"></div>
        </div>
        <div className="fees-txt">
          <p>{removeHTMLTags(message)}</p>
        </div>
      </div>

      <div className="menu-div">
        <p className="menu-txt">MENU</p>
      </div>
      <div className="menu-card">
        {Menu.map((item) => (
          <MenuCard key={item.card.info.id} menuCard={item} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
