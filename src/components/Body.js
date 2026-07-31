import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    // Local super variable using useState Hook
    const [listOfRestaurants, setListOfRestaurants] = useState(resList.data.restaurants);

    return <div className="body">
        <div className="search">
            <input type="text" placeholder="Search to find food"></input>
        </div>

        <button className="filter-btn" onClick={() => {
            const filtered = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
            )
            setListOfRestaurants(filtered);   
        }}>Top Rated Restaurants</button>

        <button className="show-btn" onClick={() => {
            setListOfRestaurants(listOfRestaurants);   
        }}>Show All Restaurants</button>
        
        <div className="res-container">
            {listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
        </div>
    </div>
}

export default Body;