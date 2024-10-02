import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Game from "./Game";
const Body = () => {
  const [SearchText, setSearchText] = useState("");
  const { listofRestaurants, FilteredRestaurant } = useRestaurantCard();
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <Game />;
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurant and food"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) => {
                const cuisines = Array.isArray(res.info.cuisines)
                  ? res.info.cuisines.join(", ")
                  : res.info.cuisines;
                return (
                  res.info.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase()) ||
                  cuisines.toLowerCase().includes(SearchText.toLowerCase())
                );
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resto-container">
        {FilteredRestaurant.map((restaurant) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            key={restaurant.info.id}
            to={"/restautrants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
