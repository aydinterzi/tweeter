import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Button from './button'

function ExploreSearch() {
  return (
    <div className='flex gap-4 p-3 bg-white text-gray-4 text-base font-medium rounded-lg shadow-md'> 
        <AiOutlineSearch className="w-6 h-6 self-center"/>
        <input className='w-full' type="text" placeholder='Search'  />
        <Button text='Search'/>
        </div>
  )
}

export default ExploreSearch