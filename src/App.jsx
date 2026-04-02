import React, {useEffect, useState} from 'react'
import Searchbar from './components/Searchbar'
import ItemsContainer from './components/ItemsContainer'
import Dropdown from './components/Dropdown'
import Modal from './components/Modal'
import { dummyData } from './assets/items2'
import { List } from 'react-window'


export default function App () {
    const newItem = dummyData.flatMap(item => { // using flatMap to extract every items inside objects of dummyData
      //console.log(Object.values(item)) // logging this to make sure my self understand wtaf is happening lolllll
      return Object.values(item)[0]
    })

    const [allItems, setAllItems] = useState([])
    const [items, setItems] = useState([]); // a setter function that handles all the item details coming from modal and dummyData
    const [modalMode, setModalMode] = useState('Add');
    const [selectedGroup, setSelectedGroup] = useState('all');
    const [itemDetails, setItemDetails] = useState({ // handles all the input elements of the Modal
        itemGroupName: '',
        itemName: '',
        itemId: '',
        variation1: {
            variationName: '',
            retailPrice: 0,
            wholesalePrice: 0,
            basePrice: 0,
        },
        variation2: {
            variationName: '',
            retailPrice: 0,
            wholesalePrice: 0,
            basePrice: 0,
        },
        variation3: {
            variationName: '',
            retailPrice: 0,
            wholesalePrice: 0,
            basePrice: 0,
        },
        variation4: {
            variationName: '',
            retailPrice: 0,
            wholesalePrice: 0,
            basePrice: 0,
        },
        variation5: {
            variationName: '',
            retailPrice: 0,
            wholesalePrice: 0,
            basePrice: 0,
        }
    })

    const testDataFromDB = async () => {
        try {
            const response = await fetch('https://simple-products-backend-chi.vercel.app/');
            const data = await response.json()
            setItems(data);
            setAllItems(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        testDataFromDB()
    }, []) //add items to dependency array before deploying
    return (
        <>
            <div className='flex flex-row gap-2'>
                <Searchbar setItems={setItems} allItems={allItems} />
                <Modal items={items} setItems={setItems}
                       allItems={allItems} setAllItems={setAllItems}
                       selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}
                       itemDetails={itemDetails} setItemDetails={setItemDetails}
                       modalMode={modalMode} setModalMode={setModalMode}
                        testDataFromDB={testDataFromDB} />
            </div>
            <Dropdown setItems={setItems} allItems={allItems}
                      selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}
                      dropdownName={'Sort products'}
                      dropdownContents={['All', 'Drinks', 'Liquor', 'Cigarettes', 'Canned Goods', 'Snacks and Biscuits', 'Noodles', 'Beverages', 'Soap and Detergents', 'Essentials', 'School Supplies', 'Others']} />
            <ItemsContainer items={items} setItems={setItems}
                            setAllItems={setAllItems}
                            setItemDetails={setItemDetails}
                            setModalMode={setModalMode}
                            setSelectedGroup={setSelectedGroup}/>
        </>
    )
}