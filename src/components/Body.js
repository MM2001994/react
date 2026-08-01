import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local super variable using useState Hook
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(SWIGGY_API_URL);
            const json = await data.json();
            console.log(json);

            const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (restaurants) {
                setListOfRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
            }
        };
        fetchData();
    }, []);


    // Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return <div className="body">
        <div className="filter">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search to find food"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={() => {
                    const filtered = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filtered);
                }}>Search</button>
            </div>

            <button className="filter-btn" onClick={() => {
                const filtered = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.0
                )
                setFilteredRestaurants(filtered);
            }}>Top Rated Restaurants</button>
        </div>

        <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
        </div>
    </div>
}
export default Body;