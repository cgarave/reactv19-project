const ItemCard = ({ groupName, itemName, retailPrice, wholesalePrice, basePrice }) => {
    return (
        <div className="card bg-base-300 card-sm sm:card-md shadow-sm overflow-hidden h-56 md:h-62">
            <div className="card-body p-3">
                <h2 className="card-title font-medium text-lg">{itemName}</h2>
                <div className="flex flex-col gap-y-1">
                    <p>Retail: ₱{retailPrice}</p>
                    <p>Wholesale: ₱{wholesalePrice}</p>
                    <p>Base: ₱{basePrice}</p>
                    <p>Category: {groupName}</p>
                </div>
                <div className="flex gap-x-2 mt-auto">
                    <button className="btn border border-blue-500 bg-blue-950 text-white font-normal text-xs flex-1">Update</button>
                    <button className="btn border border-red-500 bg-red-950 text-white font-normal text-xs flex-1">Delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemCard