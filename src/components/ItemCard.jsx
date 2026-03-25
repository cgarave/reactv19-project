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
                        <p className="font-semibold text-violet-800">Variation 1: {itemDetails.variation1.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation1.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation1.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation1.basePrice}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold text-violet-800">Variation 2: {itemDetails.variation2.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation2.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation2.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation2.basePrice}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold text-violet-800">Variation 3: {itemDetails.variation3.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation3.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation3.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation3.basePrice}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold text-violet-800">Variation 4: {itemDetails.variation4.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation4.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation4.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation4.basePrice}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold text-violet-800">Variation 5: {itemDetails.variation5.variationName}</p>
                        <p>Retail: ₱{itemDetails.variation5.retailPrice}</p>
                        <p>Wholesale: ₱{itemDetails.variation5.wholesalePrice}</p>
                        <p>Base: ₱{itemDetails.variation5.basePrice}</p>
                    </div>
                </div>
                <div className="flex gap-x-2 mt-auto">
                    <button className="btn text-xs flex-1" onClick={handleUpdate}>Update</button>
                    <button className="btn text-xs" onClick={() => document.getElementById(`delete-modal-${itemDetails.itemId}`).showModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                             stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 7l16 0"/>
                            <path d="M10 11l0 6"/>
                            <path d="M14 11l0 6"/>
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>
                        </svg>
                    </button>
                </div>
                <dialog id={`delete-modal-${itemDetails.itemId}`} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure to delete {itemDetails.itemName}?</h3>
                        <div className="modal-action">
                            <form method="dialog" className="flex flex-row gap-x-2">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-red-500 text-white text-xs px-6" onClick={handleDelete}>Yes</button>
                                <button className="btn text-xs">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            
        </div>
    )
}

export default ItemCard