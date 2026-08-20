import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const ResInfo = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const {
    name,
    locality,
    costForTwoMessage,
    totalRatingsString,
    sla
  } = resInfo?.cards?.[2]?.card?.card?.info ?? {};

  const deliveryTime = sla?.deliveryTime;

  const items =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
      ?.itemCards ?? [];

  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

  //console.log(categories?.card);

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 flex flex-col gap-6 items-start">
      <div className="w-full bg-white p-7 rounded-[18px] shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-black/5">
        <h1 className="font-bold text-2xl mb-3">{name}</h1>
        <p className="my-2 text-[#444] leading-7">{locality}</p>
        <p className="my-2 text-[#444] leading-7">Delivery Time: {deliveryTime} mins</p>
        <p className="my-2 text-[#444] leading-7">Cost for two: {costForTwoMessage}</p>
        <p className="my-2 text-[#444] leading-7">Total Ratings: {totalRatingsString}</p>
      </div>


    {/* Categories Accordion */}
      <div className="w-full bg-white p-7 rounded-[18px] shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-black/5">
        {categories.map((category, index)=> <RestaurantCategory key={category?.card?.card?.title} data = {category?.card?.card} showItems = {index === showIndex} setShowIndex = {()=> setShowIndex(showIndex === index ? null : index)} />)}
      </div>
    </div>
  );
};

export default ResInfo;