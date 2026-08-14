import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const ResInfo = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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

      <div className="w-full box-border bg-[#f7f8fa] p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
        <h2 className="mb-4 text-xl font-semibold">Menu Items:</h2>

        <ul className="list-none mt-6 p-0 grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {items.map((item) => {
            const info = item?.card?.info;
            const price = (info?.price || info?.defaultPrice || 0) / 100;

            return (
              <li
                key={info?.id}
                className="bg-white border border-[#e2e4e8] rounded-[14px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:cursor-pointer hover:border-black transition"
              >
                {info?.imageId && (
                  <img
                    src={`${CDN_URL}${info.imageId}`}
                    alt={info?.name}
                    className="w-full h-45 object-cover block"
                  />
                )}

                <h3 className="mx-4 mt-4 mb-2 text-[1.1rem] font-semibold">
                  {info?.name}
                </h3>

                <p className="mx-4 mb-3 text-[#555] leading-6">
                  {info?.description}
                </p>

                <p className="mx-4 mb-4 text-[#333]">
                  Price: ₹ {price}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResInfo;