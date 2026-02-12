import React, { useState } from 'react'
import Searchbar from './Searchbar'
import ActionButton from './ActionButton'
import ItemsContainer from './ItemsContainer'
import Dropdown from './Dropdown'
import Modal from './Modal'

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