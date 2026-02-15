import React, { useState } from 'react'
import Searchbar from './components/Searchbar'
import ItemsContainer from './components/ItemsContainer'
import Dropdown from './components/Dropdown'
import Modal from './components/Modal'

export default function App () {
  const [items, setItems] = useState([]); // this will handle the item details coming from modal
  const [groupName, setGroupName] = useState('all');

  return (
    <>
      <div className='flex flex-row gap-2'>
        <Searchbar />
        <Modal items={items} setItems={setItems} groupName={groupName} setGroupName={setGroupName} />
      </div>
      <Dropdown groupName={groupName} setGroupName={setGroupName} dropdownName={'Sort products'}/>
      <ItemsContainer items={items} setItems={setItems}/>
    </>
  )
}