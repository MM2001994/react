import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla: { deliveryTime } = {} } = resData?.info;

    return (
        <div className="p-4 bg-gray-200 rounded-md hover:bg-gray-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <img src={`${CDN_URL}${cloudinaryImageId}`} className="rounded-lg w-full h-40 object-cover" alt={name} />
            <h3 className="font-bold mt-3">{name}</h3>
            <h4 className="text-sm text-gray-700">{cuisines.join(', ')}</h4>
            <h4 className="mt-1">{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mins</h4>

            <Link to={`/restaurants/${resData.info.id}`}>
                <button className="mt-3 p-2 rounded-lg cursor-pointer bg-gray-400 hover:bg-gray-600 hover:text-white transition">
                    View Menu
                </button>
            </Link>
        </div>
    );
}
export default RestaurantCard;