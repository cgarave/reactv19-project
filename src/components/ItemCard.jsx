const ItemCard = ({ itemDetails, setItems, setItemDetails, setModalMode }) => {

    const handleDelete = () => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemDetails.itemId));
    };

    const handleUpdate = () => {
        document.getElementById('my_modal_3').showModal()
        setModalMode('Update')
        setItemDetails({...itemDetails}) // passing the current component's details to itemDetails. When the modal is opened, the value will change
    }

    return (
        <div className="card bg-base-300 card-sm sm:card-md shadow-sm overflow-hidden h-70 md:h-80">
            <div className="card-body p-3">
                <h2 className="card-title font-medium text-lg">{itemDetails.itemName}</h2>
                <div className="flex flex-col gap-y-1">
                    <p>Retail: ₱{itemDetails.retailPrice}</p>
                    <p>Wholesale: ₱{itemDetails.wholesalePrice}</p>
                    <p>Base: ₱{itemDetails.basePrice}</p>
                    <p>Category: {itemDetails.groupName}</p>
                </div>
                <div className="flex gap-x-2 mt-auto">
                    <button className="btn border border-blue-500 bg-blue-950 text-white font-normal text-xs flex-1" onClick={handleUpdate}>Update</button>
                    <button className="btn border border-red-500 bg-red-950 text-white font-normal text-xs flex-1" onClick={handleDelete}>Delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemCard