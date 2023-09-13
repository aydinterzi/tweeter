import Image from 'next/image'
import React from 'react'

import { BiComment } from 'react-icons/bi'
import { MdLoop } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiBookmark } from 'react-icons/fi'
function Tweet() {
  return (
    <div className='flex flex-col rounded-lg bg-white p-8 gap-5'>
        <div className='flex gap-4'>
            <Image src="/next.svg" width={40} height={40} alt='profile'/>
            <div>
                <p className='text-black font-medium'>Mikeal Stanley</p>
                <p className='text-gray-4 text-xs'>24 August at 20:43</p>
            </div>
        </div>
        <p className='text-base font-normal'>“We travel, some of us forever, to seek other places, other lives, other souls.” – Anais Nin</p>
        <Image src="/next.svg" width={700} height={400} alt='profile'/>
        <div className='self-end flex gap-4 font-medium text-xs text-gray-4'>
            <span>449 Comments</span>
            <span>59k Retweets</span>
            <span>234 Saved</span>
        </div>
    <hr />
    <div className='flex justify-around text-gray-2 font-medium text-sm'>
        <div className='flex gap-2 items-center'> <BiComment className="w-5 h-5"/>Comment</div>
        <div className='flex gap-2 items-center'><MdLoop className="w-5 h-5"/>Retweet</div>
        <div className='flex gap-2 items-center'><AiOutlineHeart className="w-5 h-5"/>Like</div>
        <div className='flex gap-2 items-center'><FiBookmark className="w-5 h-5"/>Save</div>
    </div>
    <hr />
    <div className='flex gap-4'>
    <Image src="/next.svg" width={40} height={40} alt='profile'/>
    <input className='w-full' type="text" placeholder='Tweet your reply' />
    </div>
    </div>
  )
}

export default Tweet