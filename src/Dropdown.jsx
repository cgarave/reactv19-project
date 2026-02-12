const Dropdown = ({ setGroupName, dropdownName }) => {
    return (
        <div>
            <legend className="fieldset-legend font-medium text-xs">{dropdownName}</legend>
            <select className="select mt-2 w-full outline-0" onChange={(e) => setGroupName(e.target.value)}>
                <option value={'all'}>All</option>
                <option value={'softdrinks'}>Softdrinks</option>
                <option value={'liquor'}>Liquor</option>
                <option value={'cigarette'}>Cigarette</option>
                <option value={'canned-goods'}>Canned Goods</option>
                <option value={'snacks-and-biscuits'}>Snacks and Biscuits</option>
                <option value={'noodles'}>Noodles</option>
                <option value={'detergents-and-soap'}>Detergents and Soap</option>
                <option value={'essentials'}>Essentials</option>
                <option value={'school-supplies'}>School Supplies</option>
                <option value={'others'}>Others</option>
            </select>
        </div>
    )
}

export default Dropdown