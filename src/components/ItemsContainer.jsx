import ItemCard from './ItemCard'
// import { RowComponentProps} from "react-window";

// function RowComponent({ item, index, ...rest }) {
//
// }

const ItemsContainer = ({ items, setItemDetails, setModalMode, selectedGroup, setSelectedGroup, testDataFromDB }) => {
  return (
    <div className='grid grid-cols-1 gap-4 mt-2 md:grid-cols-6'>
        {items.map((item) => {
            return (
                <ItemCard
                itemDetails={{
                  groupName: item.groupName,
                  itemName: item.itemName,
                  itemId: item._id,
                  variation1: {
                    variationName: item.variation1.variationName,
                    retailPrice: item.variation1.retailPrice,
                    wholesalePrice: item.variation1.wholesalePrice,
                    basePrice: item.variation1.basePrice,
                  },
                  variation2: {
                    variationName: item.variation2.variationName,
                    retailPrice: item.variation2.retailPrice,
                    wholesalePrice: item.variation2.wholesalePrice,
                    basePrice: item.variation2.basePrice,
                  },
                  variation3: {
                    variationName: item.variation3.variationName,
                    retailPrice: item.variation3.retailPrice,
                    wholesalePrice: item.variation3.wholesalePrice,
                    basePrice: item.variation3.basePrice,
                  },
                  variation4: {
                    variationName: item.variation4.variationName,
                    retailPrice: item.variation4.retailPrice,
                    wholesalePrice: item.variation4.wholesalePrice,
                    basePrice: item.variation4.basePrice,
                  },
                  variation5: {
                    variationName: item.variation5.variationName,
                    retailPrice: item.variation5.retailPrice,
                    wholesalePrice: item.variation5.wholesalePrice,
                    basePrice: item.variation5.basePrice,
                  }
                }} 
                key={item._id}
                setItemDetails={setItemDetails}
                setModalMode={setModalMode}
                selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}
                testDataFromDB={testDataFromDB}
                />
            )
        })}
    </div>  
  )
}

export default ItemsContainer