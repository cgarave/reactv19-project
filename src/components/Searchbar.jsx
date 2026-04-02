const Searchbar = ({ setItems, allItems }) => {
    const handleSearch = (e) => {
        const input = e.target.value.toLowerCase();
        if (input !== '') {
            const filtered = allItems.filter(item => item.itemName.toLowerCase().startsWith(input))
            setItems(filtered);

            // setItems(prevItems => prevItems.filter(item => item.itemName.toLowerCase().includes(input)))
        } else {
            setItems(allItems);
        }
    }
    return (
        <label className="input w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" placeholder="Search" onChange={handleSearch} />
        </label>
    )
}

export default Searchbar