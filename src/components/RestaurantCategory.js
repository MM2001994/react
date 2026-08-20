import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems , setShowIndex }) => {
    // console.log(data.itemCards);
    //const [showItems, setShowItems] = useState(false);
    const handleClick = ()=>{
        setShowIndex();
    }
    return (
        <div>
            {/* Accordion Header */}
            <div className="bg-gray-100 w-auto mx-auto my-6 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                {/* Accordion Body */}
                {showItems && <ItemsList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;