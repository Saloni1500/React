import { RESTO_URL } from "./constants";
import { useEffect, useState } from "react";
const useRestaurantCard = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTO_URL);
      const json = await data.json();
      setListofRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return { listofRestaurants, FilteredRestaurant };
};

export default useRestaurantCard;
