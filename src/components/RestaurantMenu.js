import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const ResInfo = () => {
    const { resId } = useParams();
    const  resInfo = useRestaurantMenu(resId);

    const {
        name,
        locality,
        costForTwoMessage,
        totalRatingsString,
        sla
    } = resInfo?.cards?.[2]?.card?.card?.info ?? {};

    const deliveryTime = sla?.deliveryTime;

    const items = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ?? [];

    console.log("Items:", items);


    if (resInfo === null) {
        return <Shimmer />;
    }
    return (
        <div className="restaurant-menu-container">
            <div className="restaurant-details-card">
                <h1>{name}</h1>
                <p>{locality}</p>
                <p>Delivery Time: {deliveryTime} mins</p>
                <p>Cost for two: {costForTwoMessage}</p>
                <p>Total Ratings: {totalRatingsString}</p>
            </div>
            <div className="restaurant-menu">
                <h2>Menu Items:</h2>
            <ul>
                {items.map((item) => (
                    <li key={item?.card?.info?.id}>
                        <h3>{item?.card?.info?.name}</h3>
                        <img src={`${CDN_URL}${item?.card?.info?.imageId}`} className="fit-cover" />
                        <p>{item?.card?.info?.description}</p>
                        <p>Price: ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</p>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};
export default ResInfo;