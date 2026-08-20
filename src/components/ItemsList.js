import { CDN_URL } from "../utils/constants"
const ItemsList = ({items}) => {
    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="text-bold">{item.card.info.name}</span>
                                <span> ₹{item.card.info.price/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="relative w-3/12 p-4">
                            <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                            <button className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-md border border-green-600 bg-white px-6 py-1.5 text-sm font-semibold text-green-700 shadow-md transition-colors hover:bg-green-700 hover:text-white">Add</button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ItemsList
