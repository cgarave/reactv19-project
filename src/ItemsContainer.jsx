import ItemCard from './ItemCard'

const ItemsContainer = ({ items }) => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-2'>
        {items.map((item) => {
            return (
                <ItemCard groupName={item.groupName} itemName={item.itemName} retailPrice={item.retailPrice} wholesalePrice={item.wholesalePrice} basePrice={item.basePrice} key={item.id}/>
            )
        })}
    </div>  
  )
}

export default ItemsContainer