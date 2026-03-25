const ItemCard = ({ itemDetails, setItemDetails, setModalMode }) => {

    const handleDelete = async () => {
        try {
            await fetch(`https://simple-products-backend-chi.vercel.app/${itemDetails.itemId}`, {
                method: 'DELETE',
            })
        } catch (err) {
            console.log(err)
        }
        //setItems(prevItems => prevItems.filter(item => item._id !== itemDetails.itemId));
    };

    const handleUpdate = () => {
        document.getElementById('my_modal_3').showModal()
        setModalMode('Update')
        setItemDetails({...itemDetails}) // passing the current component's details to itemDetails. When the modal is opened, the value will change
    }
    // Note: These variations can be refactored into map render just like in ItemsContainer component
    return (
        <div className="card bg-base-300 card-sm sm:card-md shadow-sm overflow-hidden h-auto md:h-auto">
            <div className="card-body p-3">
                <h2 className="card-title font-medium text-lg">{itemDetails.itemName}</h2>
                <div className="flex flex-col gap-y-1">
                    <p>Group: {itemDetails.groupName}</p>
                    <div className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold">Variation 1: {itemDetails.variation1.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation1.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation1.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation1.basePrice}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold">Variation 2: {itemDetails.variation2.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation2.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation2.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation2.basePrice}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold">Variation 3: {itemDetails.variation3.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation3.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation3.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation3.basePrice}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold">Variation 4: {itemDetails.variation4.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation4.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation4.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation4.basePrice}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold">Variation 5: {itemDetails.variation5.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation5.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation5.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation5.basePrice}</p>
                    </div>
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