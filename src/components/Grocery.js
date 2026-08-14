import React from 'react'

const Grocery = () => {
    const groceryItems = [
        {
            name: "Fresh Vegetables",
            price: "₹ 249",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
        },
        {
            name: "Fruit Basket",
            price: "₹ 399",
            image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b",
        },
        {
            name: "Organic Dairy",
            price: "₹ 299",
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
        },
        {
            name: "Healthy Snacks",
            price: "₹ 199",
            image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
        },
        {
            name: "Bakery Fresh",
            price: "₹ 179",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        },
        {
            name: "Rice & Grains",
            price: "₹ 259",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6OfeQIXx3MNl9pjrOFyZCXVb_3Kx9vprdG7fzKNuHA&s=10",
        },
        {
            name: "Spice Corner",
            price: "₹ 149",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
        },
        {
            name: "Beverages",
            price: "₹ 220",
            image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
        },
    ];

    return (
        <div className="m-4 sm:m-6 p-4 sm:p-6 bg-linear-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg">
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-green-800">Grocery Store</h1>
                <p className="mt-2 text-gray-600">Welcome to our grocery store!</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {groceryItems.map((item, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden rounded-2xl border border-green-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-55 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                            <p className="mt-1 text-green-700 font-medium">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grocery
