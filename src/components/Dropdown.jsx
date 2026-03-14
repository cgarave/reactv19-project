const Dropdown = ({ selectedGroup, setSelectedGroup, dropdownName, dropdownContents }) => {

    return (
        <div>
            <legend className="fieldset-legend font-medium text-xs">{dropdownName}</legend>
            <select className="select mt-2 w-full outline-0" value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
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