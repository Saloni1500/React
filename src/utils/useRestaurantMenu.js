import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [ResInfo, setResInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (resId) fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { ResInfo, isLoading };
};
export default useRestaurantMenu;
