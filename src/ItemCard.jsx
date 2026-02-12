const ItemCard = ({ groupName, itemName, retailPrice, wholesalePrice, basePrice }) => {
    return (
        <div className="card min-w-40 bg-base-300 card-sm sm:card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{itemName}</h2>
                <p>Retail Price: {retailPrice}</p>
                <p>Wholesale Price: {wholesalePrice}</p>
                <p>Base Price: {basePrice}</p>
                <h4 className="px-2 bg-emerald-600 rounded-full w-fit text-white">{groupName}</h4>
            </div>
        </div>
    )
}

export default ItemCard