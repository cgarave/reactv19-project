import { useEffect } from "react";
const Dropdown = ({ setItems, allItems, selectedGroup, setSelectedGroup, isSort, dropdownName, dropdownContents }) => {

    function sortBy(value) {
        const filteredItems = allItems.filter(item => item.groupName.toLowerCase().includes(value.toLowerCase()));
        if(value === 'all') {
            setItems(allItems);
        } else {
            setItems(filteredItems);
        }
    }

    return (
        <div>
            <legend className="fieldset-legend font-medium text-xs">{dropdownName}</legend>
            <select className="select mt-2 w-full outline-0" value={selectedGroup} onChange={e => {
                const value = e.target.value;
                setSelectedGroup(value);
                sortBy(value);
            }}>
                {dropdownContents.map(content => {
                    return (
                        <option key={crypto.randomUUID()} value={content.toLowerCase()}>{content}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Dropdown