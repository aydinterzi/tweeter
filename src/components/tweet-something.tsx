import Image from 'next/image'
import React from 'react'
import { BsCardImage } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import Button from './button'
function TweetSomething() {
  return (
    <div className='px-5 py-2 shadow-md rounded-xl bg-white flex flex-col gap-2 '>
        <h2 className='font-semibold text-xs text-gray-2'>Tweet something</h2>
        <hr />
            <div className='flex gap-3'>
            <Image src="/next.svg" width={40} height={45} alt='profile'/> <input className='w-full' placeholder='Whats happening?'/>
            </div>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center text-blue-1 font-semibold text-xs'>
                <BsCardImage className="w-5 h-5"/>
                <BiWorld className="w-5 h-5"/>
                <span>Everyone can reply</span>
            </div>
            <Button text='Tweet'/>
            </div>
                </div>
  )
}

export default TweetSomething