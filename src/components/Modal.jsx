import React, {useRef, useState} from "react"
import Dropdown from "./Dropdown"

const Modal = ({ items, setItems, itemDetails, setItemDetails, modalMode, setModalMode }) => {

    const modalRef = useRef(null);
    const [selectedGroup, setSelectedGroup] = useState('softdrinks');

    let savedItems = []
    if(items.length > 0) {
        for(let i = 0; i < items.length; i++){
            savedItems = [...savedItems, items[i].itemName]
        }
    }

    function addItem() {
        if(itemDetails.itemName !== '' && !savedItems.includes(itemDetails.itemName)) {
            setItems([...items, {
                groupName: selectedGroup,
                itemName: itemDetails.itemName,
                retailPrice: itemDetails.retailPrice,
                wholesalePrice: itemDetails.wholesalePrice,
                basePrice: itemDetails.basePrice,
                id: crypto.randomUUID(),
            }])

            setItemDetails({...itemDetails, itemName: '', retailPrice: 0, wholesalePrice: 0, basePrice: 0})
            setSelectedGroup('softdrinks');
            modalRef.current.click(); // closes the modal
        } else if (savedItems.includes(itemDetails.itemName)) {
            console.log('item already added');    
        }
    }
    function updateItem() {
        setItems(previousItems => previousItems.map(item => { // loop through every item
                if(item.id === itemDetails.itemId) { // if component id is == to the selected id, replace it
                    return {...item, ...itemDetails, groupName: selectedGroup} //copies the array of old items (...item) and replace with new values (...itemDetails, groupName: selectedGroup)
                                                    // so instead of replacing the old with a new component, it only replaces the values that has changed and merge it
                } else { // if component id !== to the selected id, return the item without replacing it
                    return item
                }
            }))
        setItemDetails({...itemDetails, itemName: '', retailPrice: 0, wholesalePrice: 0, basePrice: 0})
        setSelectedGroup('softdrinks');
        modalRef.current.click(); // closes the modal
    }

    function handleSubmit() {
        if(modalMode === 'Add') {
            addItem();
        } else if(modalMode === 'Update') {
            updateItem();
        }
    }

    return (
        <>
            <button className="btn bg-amber-400 text-black" onClick={() => {
                document.getElementById('my_modal_3').showModal()
                setModalMode('Add')
                }}>Add New Item</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" ref={modalRef}>✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{modalMode} Item</h3>
                    <div className="my-2">
                        <Dropdown selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} dropdownName={'Group'} dropdownContents={['Softdrinks', 'Liquor', 'Cigarettes', 'Canned Goods', 'Snacks and Biscuits', 'Noodles', 'Beverages', 'Soap and Detergents', 'Essentials', 'School Supplies', 'Others']} />
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-medium">Item Name</legend>
                            <input type="text" className="input w-full" placeholder="Type here" onChange={(e) => setItemDetails({...itemDetails, itemName: e.target.value})} value={itemDetails.itemName}/>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-medium">Retail Price</legend>
                            <input type="number" className="input w-full" onChange={(e) => setItemDetails({...itemDetails, retailPrice: e.target.value})} value={itemDetails.retailPrice} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-medium">Wholesale Price</legend>
                            <input type="number" className="input w-full" onChange={(e) => setItemDetails({...itemDetails, wholesalePrice: e.target.value})} value={itemDetails.wholesalePrice} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-medium">Base Price</legend>
                            <input type="number" className="input w-full"  onChange={(e) => setItemDetails({...itemDetails, basePrice: e.target.value})} value={itemDetails.basePrice} />
                        </fieldset>
                    </div>
                    <button className="btn bg-amber-400 text-black w-full" onClick={handleSubmit}>{modalMode} Item</button>
                </div>
            </dialog>
        </>
    )
}

export default Modal