import React, { useState } from 'react'
import Searchbar from './components/Searchbar'
import ItemsContainer from './components/ItemsContainer'
import Dropdown from './components/Dropdown'
import Modal from './components/Modal'
import { dummyData } from './assets/items'

export default function App () {
  const [items, setItems] = useState(dummyData); // this will handle the item details coming from modal
  const [modalMode, setModalMode] = useState('Add');
  
  //const [groupName, setGroupName] = useState('all');

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
      <Dropdown dropdownName={'Sort products'} />
      <ItemsContainer items={items} setItems={setItems} setItemDetails={setItemDetails} setModalMode={setModalMode} />
    </>
  )
}