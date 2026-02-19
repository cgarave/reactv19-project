import ItemCard from './ItemCard'

const ItemsContainer = ({ items, setItems, setItemDetails, setModalMode }) => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-2 md:grid-cols-8'>
        {items.map((item) => {
            return (
                <ItemCard itemDetails={{
                  groupName: item.groupName,
                  itemName: item.itemName,
                  retailPrice: item.retailPrice,
                  wholesalePrice: item.wholesalePrice,
                  basePrice: item.basePrice,
                  itemId: item.id,
                }} 
                setItems={setItems} key={item.id}
                setItemDetails={setItemDetails}
                setModalMode={setModalMode} />
            )
        })}
    </div>  
  )
}

export default ItemsContainer