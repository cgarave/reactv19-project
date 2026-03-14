import React, { useState } from 'react'
import Searchbar from './components/Searchbar'
import ItemsContainer from './components/ItemsContainer'
import Dropdown from './components/Dropdown'
import Modal from './components/Modal'
import { dummyData } from './assets/items2'

export default function App () {
  const newItem = dummyData.flatMap(item => { // using flatMap to extract every items inside objects
      //console.log(Object.values(item)) // logging this to make sure my self understand wtaf is happening lolllll
      return Object.values(item)[0]
  })
  const [items, setItems] = useState(newItem); // this will handle the item details coming from modal
  const [modalMode, setModalMode] = useState('Add');
  const [itemDetails, setItemDetails] = useState({ // handles all the input elements of the Modal
    itemGroupName: '',
    itemName: '',
    retailPrice: 0,
    wholesalePrice: 0,
    basePrice: 0,
  })

  return (
    <>
      <div className='flex flex-row gap-2'>
        <Searchbar />
        <Modal  items={items} setItems={setItems}
                itemDetails={itemDetails} setItemDetails={setItemDetails}
                modalMode={modalMode} setModalMode={setModalMode} />
      </div>
      {/*<Dropdown itemDetails={itemDetails} setItemDetails={setItemDetails} dropdownName={'Sort products'} dropdownContents={['All', 'Softdrinks', 'Liquor', 'Cigarettes', 'Canned Goods', 'Snacks and Biscuits', 'Noodles', 'Beverages', 'Soap and Detergents', 'Essentials', 'School Supplies', 'Others']} />*/}
      <ItemsContainer items={items} setItems={setItems} setItemDetails={setItemDetails} setModalMode={setModalMode} />
    </>
  )
}