import { useState, useRef } from "react"
import Dropdown from "./Dropdown"

const Modal = ({ items, setItems, groupName, setGroupName }) => {

    const [itemName, setItemName] = useState('');
    const [retailPrice, setRetailPrice] = useState(0);
    const [wholesalePrice, setWholesalePrice] = useState(0);
    const [basePrice, setBasePrice] = useState(0);

    const itemNameInput = (e) => {
        setItemName(e.target.value);
    }
    const retailPriceInput = (e) => {
        setRetailPrice(e.target.value);
    }
    const wholesalePriceInput = (e) => {
        setWholesalePrice(e.target.value);
    }
    const basePriceInput = (e) => {
        setBasePrice(e.target.value);
    }

    const modalRef = useRef(null);

    let savedItems = []
    if(items.length > 0) {
        for(let i = 0; i < items.length; i++){
            savedItems = [...savedItems, items[i].itemName]
        }
    }

    function addItem() {
        console.log(savedItems);
        
        if(itemName !== '' && !savedItems.includes(itemName)) {
            setItems([...items, {
                groupName: groupName,
                itemName: itemName,
                retailPrice: retailPrice,
                wholesalePrice: wholesalePrice,
                basePrice: basePrice,
                id: crypto.randomUUID(),
            }])

            setItemName('');
            setRetailPrice(0);
            setWholesalePrice(0);
            setBasePrice(0);
            modalRef.current.click(); // closes the modal
        } else if (savedItems.includes(itemName)) {
            console.log('item is already added');
        }
    }

    return (
        <>
            <button className="btn bg-amber-400 text-black" onClick={() => document.getElementById('my_modal_3').showModal()}>Add New Item</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" ref={modalRef}>✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Add Item</h3>
                    <div className="my-2">
                        <Dropdown groupName={groupName} setGroupName={setGroupName} dropdownName={'Group'}/>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-medium">Item Name</legend>
                            <input type="text" className="input w-full" placeholder="Type here" onChange={itemNameInput} value={itemName}/>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-medium">Retail Price</legend>
                            <input type="number" className="input w-full" onChange={retailPriceInput} value={retailPrice} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-medium">Wholesale Price</legend>
                            <input type="number" className="input w-full" onChange={wholesalePriceInput} value={wholesalePrice} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-medium">Base Price</legend>
                            <input type="number" className="input w-full"  onChange={basePriceInput} value={basePrice} />
                        </fieldset>
                    </div>
                    <button className="btn bg-amber-400 text-black w-full" onClick={addItem}>Add Item</button>
                </div>
            </dialog>
        </>
    )
}

export default Modal