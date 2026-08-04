import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla: { deliveryTime } = {} } = resData?.info;
    return <div className="menu">
        <img src={`${CDN_URL}${cloudinaryImageId}`} className="fit-cover" />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwo} </h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} mins</h4>
        <Link to={`/restaurants/${resData.info.id}`}>
            <button className="menu-btn">View Menu</button>
        </Link>
    </div>
}
export default RestaurantCard;