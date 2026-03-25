import React, {useRef, useState} from "react"
import Dropdown from "./Dropdown"

const Modal = ({ items, setItems, itemDetails, setItemDetails, modalMode, setModalMode }) => {

    const modalRef = useRef(null);
    const [selectedGroup, setSelectedGroup] = useState('drinks');

    // Check if the item is already added
    let savedItems = []
    if(items.length > 0) {
        for(let i = 0; i < items.length; i++){
            savedItems = [...savedItems, items[i].itemName]
        }
    }

    const addItemToDB = async (itemToAdd) => {
        try {
            await fetch('https://simple-products-backend-chi.vercel.app/addItem', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(itemToAdd),
            })
        } catch (err) {
            console.log(err)
        }
    }

    function addItem() {
        if(itemDetails.itemName !== '' && !savedItems.includes(itemDetails.itemName)) {
            // setItems([...items, {
            //     groupName: selectedGroup,
            //     itemName: itemDetails.itemName,
            //     retailPrice: itemDetails.retailPrice,
            //     wholesalePrice: itemDetails.wholesalePrice,
            //     basePrice: itemDetails.basePrice,
            //     id: crypto.randomUUID(),
            // }])

            addItemToDB({
                groupName: selectedGroup,
                itemName: itemDetails.itemName,
                variation1: {
                    variationName: itemDetails.variation1.variationName,
                    retailPrice: itemDetails.variation1.retailPrice,
                    wholesalePrice: itemDetails.variation1.wholesalePrice,
                    basePrice: itemDetails.variation1.basePrice,
                },
                variation2: {
                    variationName: itemDetails.variation2.variationName,
                    retailPrice: itemDetails.variation2.retailPrice,
                    wholesalePrice: itemDetails.variation2.wholesalePrice,
                    basePrice: itemDetails.variation2.basePrice,
                },
                variation3: {
                    variationName: itemDetails.variation3.variationName,
                    retailPrice: itemDetails.variation3.retailPrice,
                    wholesalePrice: itemDetails.variation3.wholesalePrice,
                    basePrice: itemDetails.variation3.basePrice,
                },
                variation4: {
                    variationName: itemDetails.variation4.variationName,
                    retailPrice: itemDetails.variation4.retailPrice,
                    wholesalePrice: itemDetails.variation4.wholesalePrice,
                    basePrice: itemDetails.variation4.basePrice,
                },
                variation5: {
                    variationName: itemDetails.variation5.variationName,
                    retailPrice: itemDetails.variation5.retailPrice,
                    wholesalePrice: itemDetails.variation5.wholesalePrice,
                    basePrice: itemDetails.variation5.basePrice,
                }
            })

            //reset input fields
            setItemDetails({...itemDetails, itemName: '',
                variation1: {variationName: '', retailPrice: 0, wholesalePrice: 0, basePrice: 0},
                variation2: {variationName: '', retailPrice: 0, wholesalePrice: 0, basePrice: 0},
                variation3: {variationName: '', retailPrice: 0, wholesalePrice: 0, basePrice: 0},
                variation4: {variationName: '', retailPrice: 0, wholesalePrice: 0, basePrice: 0},
                variation5: {variationName: '', retailPrice: 0, wholesalePrice: 0, basePrice: 0}
            })
            setSelectedGroup('drinks');
            modalRef.current.click(); // closes the modal
        } else if (savedItems.includes(itemDetails.itemName)) {
            console.log('item already added');
        }
    }

    const updateItemToDB = async (itemToAdd) => {
        try {
            await fetch(`https://simple-products-backend-chi.vercel.app/${itemDetails.itemId}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(itemToAdd),
            })
        } catch (err) {
            console.error(err)
        }
    }

    async function updateItem() {
        // setItems(previousItems => previousItems.map(item => { // loop through every item
        //         if(item.id === itemDetails.itemId) { // if component id is == to the selected id, replace it
        //             return {...item, ...itemDetails, groupName: selectedGroup} //copies the array of old items (...item) and replace with new values (...itemDetails, groupName: selectedGroup)
        //                                             // so instead of replacing the old with a new component, it only replaces the values that has changed and merge it
        //         } else { // if component id !== to the selected id, return the item without replacing it
        //             return item
        //         }
        //     }))
        // setItemDetails({...itemDetails, itemName: '', retailPrice: 0, wholesalePrice: 0, basePrice: 0})

        updateItemToDB({
            groupName: selectedGroup,
            itemName: itemDetails.itemName,
            variation1: {
                variationName: itemDetails.variation1.variationName,
                retailPrice: itemDetails.variation1.retailPrice,
                wholesalePrice: itemDetails.variation1.wholesalePrice,
                basePrice: itemDetails.variation1.basePrice,
            },
            variation2: {
                variationName: itemDetails.variation2.variationName,
                retailPrice: itemDetails.variation2.retailPrice,
                wholesalePrice: itemDetails.variation2.wholesalePrice,
                basePrice: itemDetails.variation2.basePrice,
            },
            variation3: {
                variationName: itemDetails.variation3.variationName,
                retailPrice: itemDetails.variation3.retailPrice,
                wholesalePrice: itemDetails.variation3.wholesalePrice,
                basePrice: itemDetails.variation3.basePrice,
            },
            variation4: {
                variationName: itemDetails.variation4.variationName,
                retailPrice: itemDetails.variation4.retailPrice,
                wholesalePrice: itemDetails.variation4.wholesalePrice,
                basePrice: itemDetails.variation4.basePrice,
            },
            variation5: {
                variationName: itemDetails.variation5.variationName,
                retailPrice: itemDetails.variation5.retailPrice,
                wholesalePrice: itemDetails.variation5.wholesalePrice,
                basePrice: itemDetails.variation5.basePrice,
            }
        })

        setSelectedGroup('drinks');
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
                        <Dropdown selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} dropdownName={'Group'} dropdownContents={['Drinks', 'Liquor', 'Cigarettes', 'Canned Goods', 'Snacks and Biscuits', 'Noodles', 'Beverages', 'Soap and Detergents', 'Essentials', 'School Supplies', 'Others']} />
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-medium">Item Name</legend>
                            <input type="text" className="input w-full" placeholder="Type here" onChange={(e) => setItemDetails({...itemDetails, itemName: e.target.value})} value={itemDetails.itemName}/>
                        </fieldset>
                        <div className="collapse bg-base-200 border-base-200 border my-2 collapse-arrow">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium text-sm">Variation 1</div>
                            <div className="collapse-content text-sm grid grid-cols-2 gap-x-2 px-4">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Variation 1 Name</legend>
                                    <input type="text" className="input w-full" placeholder="Type here"
                                           onChange={(e) => setItemDetails({...itemDetails, variation1: {...itemDetails.variation1, variationName: e.target.value}})}
                                           value={itemDetails.variation1.variationName}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Retail Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation1: {...itemDetails.variation1, retailPrice: e.target.value}})}
                                           value={itemDetails.variation1.retailPrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Wholesale Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation1: {...itemDetails.variation1, wholesalePrice: e.target.value}})}
                                           value={itemDetails.variation1.wholesalePrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Base Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation1: {...itemDetails.variation1, basePrice: e.target.value}})}
                                           value={itemDetails.variation1.basePrice}/>
                                </fieldset>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 border-base-200 border my-2 collapse-arrow">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium text-sm">Variation 2</div>
                            <div className="collapse-content text-sm grid grid-cols-2 gap-x-2 px-4">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Variation 2 Name</legend>
                                    <input type="text" className="input w-full" placeholder="Type here"
                                           onChange={(e) => setItemDetails({...itemDetails, variation2: {...itemDetails.variation2, variationName: e.target.value}})}
                                           value={itemDetails.variation2.variationName}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Retail Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation2: {...itemDetails.variation2, retailPrice: e.target.value}})}
                                           value={itemDetails.variation2.retailPrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Wholesale Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation2: {...itemDetails.variation2, wholesalePrice: e.target.value}})}
                                           value={itemDetails.variation2.wholesalePrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Base Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation2: {...itemDetails.variation2, basePrice: e.target.value}})}
                                           value={itemDetails.variation2.basePrice}/>
                                </fieldset>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 border-base-200 border my-2 collapse-arrow">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium text-sm">Variation 3</div>
                            <div className="collapse-content text-sm grid grid-cols-2 gap-x-2 px-4">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Variation 3 Name</legend>
                                    <input type="text" className="input w-full" placeholder="Type here"
                                           onChange={(e) => setItemDetails({...itemDetails, variation3: {...itemDetails.variation3, variationName: e.target.value}})}
                                           value={itemDetails.variation3.variationName}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Retail Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation3: {...itemDetails.variation3, retailPrice: e.target.value}})}
                                           value={itemDetails.variation3.retailPrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Wholesale Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation3: {...itemDetails.variation3, wholesalePrice: e.target.value}})}
                                           value={itemDetails.variation3.wholesalePrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Base Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation3: {...itemDetails.variation3, basePrice: e.target.value}})}
                                           value={itemDetails.variation3.basePrice}/>
                                </fieldset>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 border-base-200 border my-2 collapse-arrow">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium text-sm">Variation 4</div>
                            <div className="collapse-content text-sm grid grid-cols-2 gap-x-2 px-4">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Variation 4 Name</legend>
                                    <input type="text" className="input w-full" placeholder="Type here"
                                           onChange={(e) => setItemDetails({...itemDetails, variation4: {...itemDetails.variation4, variationName: e.target.value}})}
                                           value={itemDetails.variation4.variationName}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Retail Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation4: {...itemDetails.variation4, retailPrice: e.target.value}})}
                                           value={itemDetails.variation4.retailPrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Wholesale Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation4: {...itemDetails.variation4, wholesalePrice: e.target.value}})}
                                           value={itemDetails.variation4.wholesalePrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Base Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation4: {...itemDetails.variation4, basePrice: e.target.value}})}
                                           value={itemDetails.variation4.basePrice}/>
                                </fieldset>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 border-base-200 border my-2 collapse-arrow">
                            <input type="checkbox" />
                            <div className="collapse-title font-medium text-sm">Variation 5</div>
                            <div className="collapse-content text-sm grid grid-cols-2 gap-x-2 px-4">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Variation 5 Name</legend>
                                    <input type="text" className="input w-full" placeholder="Type here"
                                           onChange={(e) => setItemDetails({...itemDetails, variation5: {...itemDetails.variation5, variationName: e.target.value}})}
                                           value={itemDetails.variation5.variationName}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Retail Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation5: {...itemDetails.variation5, retailPrice: e.target.value}})}
                                           value={itemDetails.variation5.retailPrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Wholesale Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation5: {...itemDetails.variation5, wholesalePrice: e.target.value}})}
                                           value={itemDetails.variation5.wholesalePrice}/>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend font-medium">Base Price</legend>
                                    <input type="number" className="input w-full"
                                           onChange={(e) => setItemDetails({...itemDetails, variation5: {...itemDetails.variation5, basePrice: e.target.value}})}
                                           value={itemDetails.variation5.basePrice}/>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <button className="btn bg-amber-400 text-black w-full" onClick={handleSubmit}>{modalMode} Item</button>
                </div>
            </dialog>
        </>
    )
}

export default Modal