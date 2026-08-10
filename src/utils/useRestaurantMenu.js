import { swiggyUrl } from "../utils/constants";
import{ useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchResInfo();
    }, []);

    const fetchResInfo = async () => {
        try {
            const response = await fetch("https://corsproxy.io/?" + encodeURIComponent(swiggyUrl) + resId);

            const json = await response.json();
            console.log("Swiggy Data:", json);

            setResInfo(json?.data);

        } catch (error) {
            console.error("Fetch failed:", error);
        }
    };

    return resInfo;
}

export default useRestaurantMenu;