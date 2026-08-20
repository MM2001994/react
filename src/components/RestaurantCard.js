import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla: { deliveryTime } = {} } = resData?.info;
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="p-4 bg-gray-200 rounded-md hover:bg-gray-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <img src={`${CDN_URL}${cloudinaryImageId}`} className="rounded-lg w-full h-40 object-cover" alt={name} />
            <h3 className="font-bold mt-3">{name}</h3>
            <h4 className="text-sm text-gray-700">{cuisines.join(', ')}</h4>
            <h4 className="mt-1">{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mins</h4>
            <h4>{loggedInUser}</h4>

            <Link to={`/restaurants/${resData.info.id}`}>
                <button className="mt-3 p-2 rounded-lg cursor-pointer bg-gray-400 hover:bg-gray-600 hover:text-white transition">
                    View Menu
                </button>
            </Link>
        </div>
    );
}

// Creatiing a Higher Order Component which will take Restaurant Card as their component
// This compnent will take Restaurant Card as their input and will give Veg Restaurant Card as output.
export const HigherRestaurantCard = (RestaurantCard)=>{
    return ({resData})=>{
        return (
            <div className="relative group">
                <label className="absolute top-3 left-3 z-10 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white shadow-md transition-all duration-300 group-hover:bg-green-800 group-hover:shadow-lg">
                    Veg
                </label>
                <RestaurantCard resData={resData} />
            </div>
        )
    }
}
export default RestaurantCard;