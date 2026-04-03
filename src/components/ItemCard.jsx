import { useRef, useEffect } from 'react';
const ItemCard = ({ setAllItems, items, setItems, itemDetails, setItemDetails, setModalMode, setSelectedGroup }) => {
    const ref = useRef(null);
    useEffect(() => {
        const parentElement = ref.current;
        if (parentElement.children.length % 2 === 0) {
            parentElement.lastChild.classList.remove('col-span-2')
        } else if (parentElement.children.length % 2 === 1) {
            parentElement.lastChild.classList.add('col-span-2')
        }
    }, [items]);
    const handleDelete = async () => {
        try {
            setAllItems(prevItems => prevItems.filter(item => item._id !== itemDetails.itemId)) // controls the data passed from the database (this resolves the issue of recurring of items after deletion)
            setItems(prevItems => prevItems.filter(item => item._id !== itemDetails.itemId)); // controls the itemcontainer data
            await fetch(`https://simple-products-backend-chi.vercel.app/${itemDetails.itemId}`, {
                method: 'DELETE',
            })
        } catch (err) {
            console.log(err)
        }
    };

    const handleUpdate = () => {
        document.getElementById('my_modal_3').showModal()
        setModalMode('Update')
        setSelectedGroup(itemDetails.groupName)
        setItemDetails({...itemDetails}) // passing the current component's details to itemDetails. When the modal is opened, the value will change
    }

    const renderVariations = () => {
        const variation = Object.values(itemDetails)
        return variation.slice(3).map((item, index) => {
            if(item.variationName !== '') {
                return (
                    <div key={index} className="flex flex-col gap-y-1 p-2 rounded-md bg-base-100">
                        <p className="font-semibold text-violet-800">{item.variationName}</p>
                        <p>Retail: ₱{item.retailPrice}</p>
                        <p>Wholesale: ₱{item.wholesalePrice}</p>
                        <p>Base: ₱{item.basePrice}</p>
                    </div>
                )
            }
        })
    }

    // Note: These variations can be refactored into map render just like in ItemsContainer component
    return (
        <div className="card bg-base-300 card-sm sm:card-md shadow-sm overflow-hidden h-auto md:h-auto">
            <div className="card-body p-3">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="card-title font-bold text-lg">{itemDetails.itemName}</h2>
                    <div className="bg-violet-800 text-white text-[8px] font-semibold rounded-full px-2 py-1 w-fit">{itemDetails.groupName.toString().toUpperCase()}</div>
                </div>
                <div className="grid grid-cols-2 gap-2" ref={ref}>
                    {renderVariations()}
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