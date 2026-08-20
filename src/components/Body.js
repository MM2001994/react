import RestaurantCard, { HigherRestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // Local super variable using useState Hook
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const onlineStatus = useOnlineStatus();
    const [searchText, setSearchText] = useState("");

    const RestaurantCardVeg = HigherRestaurantCard(RestaurantCard);

    //     useEffect(() => {
    //         const fetchData = async () => {
    //             const data = await fetch(
    //                 "https://corsproxy.io/?url=" + encodeURIComponent(SWIGGY_API_URL)
    //             );
    //             const json = await data.json();
    //             console.log(json);

    //             const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //             if (restaurants) {
    //                 setListOfRestaurants(restaurants);
    //                 setFilteredRestaurants(restaurants);
    //             }
    //         };
    //         fetchData();
    //     }, []);


    //     // Conditional Rendering
    //     if (listOfRestaurants.length === 0) {
    //         return <Shimmer />;
    //     }

    //     return <div className="body">
    //         <div className="filter">
    //             <div className="search">
    //                 <input
    //                     type="text"
    //                     placeholder="Search to find food"
    //                     value={searchText}
    //                     onChange={(e) => setSearchText(e.target.value)}
    //                 />
    //                 <button onClick={() => {
    //                     const filtered = listOfRestaurants.filter((res) =>
    //                         res.info.name.toLowerCase().includes(searchText.toLowerCase())
    //                     );
    //                     setFilteredRestaurants(filtered);
    //                 }}>Search</button>
    //             </div>

    //             <button className="filter-btn" onClick={() => {
    //                 const filtered = listOfRestaurants.filter(
    //                     (res) => res.info.avgRating > 4.0
    //                 )
    //                 setFilteredRestaurants(filtered);
    //             }}>Top Rated Restaurants</button>
    //         </div>

    //         <div className="res-container">
    //             {filteredRestaurants.map((restaurant) => (
    //                 <RestaurantCard key={restaurant.info.id} resData={restaurant} />
    //             ))}
    //         </div>
    //     </div>
    // }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                "https://corsproxy.io/?url=" + encodeURIComponent(SWIGGY_API_URL)
            );
            const json = await data.json();
            // console.log(json);

            const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (restaurants) {
                setListOfRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
            }
        };
        fetchData();
    }, []);

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    if (onlineStatus === false) {
        return (
            <div className="offline-message">
                <h2>You are offline!</h2>
                <p>Please check your internet connection.</p>
            </div>
        );
    }

    return (
        <div className="body py-4">
            <div className="flex flex-col gap-3 p-2 sm:flex-row sm:items-center">
                <div className="search w-full sm:w-auto">
                    <input
                        className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                        type="text"
                        placeholder="Search to find food"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <button
                        className="py-2 px-3 bg-green-200 rounded-lg hover:bg-green-300 hover:shadow-md hover:scale-105 transition-all duration-200"
                        onClick={() => {
                            const filtered = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filtered);
                        }}
                    >
                        Search
                    </button>

                    <button
                        className="py-2 px-3 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300 hover:shadow-md hover:scale-105 transition-all duration-200"
                        onClick={() => {
                            const filtered = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.5
                            );
                            setFilteredRestaurants(filtered);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredRestaurants.map((restaurant) => (
                    restaurant.info.veg ? (
                        <RestaurantCardVeg key={restaurant.info.id} resData={restaurant} />
                    ) : (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )
                ))}
            </div>
        </div>
    );

}
export default Body;