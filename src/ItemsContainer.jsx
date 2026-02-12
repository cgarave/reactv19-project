import ItemCard from './ItemCard'
import { dummyData } from './assets/items.jsx'

const ItemsContainer = ({ items }) => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-2'>
        {dummyData.map((data) => {
            return (
                <ItemCard 
                  groupName={data.groupName} 
                  itemName={data.itemName} 
                  retailPrice={data.retailPrice} 
                  wholesalePrice={data.wholesalePrice} 
                  basePrice={data.basePrice} 
                  key={data.id}/>
            )
        })}
        {items.map((item) => {
            return (
                <ItemCard 
                  groupName={item.groupName} 
                  itemName={item.itemName} 
                  retailPrice={item.retailPrice} 
                  wholesalePrice={item.wholesalePrice} 
                  basePrice={item.basePrice} 
                  key={item.id}/>
            )
        })}
    </div>  
  )
}

export default ItemsContainer