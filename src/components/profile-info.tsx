import React from 'react'
import Button from './button'
import Image from 'next/image'

function ProfileInfo() {
  return (
    <div className='flex p-6 rounded-lg shadow-md bg-white gap-6'>
          <div className='basis-1/5 relative'>
            <div className='h-36 w-36 absolute -top-1/2'>
                <Image src="./next.svg" fill alt='profile photo' className='  bg-blue-500 z-50'/>
            </div>
          </div>
          <div className='basis-full'>
            <div className='flex justify-between'>
              <div className='flex gap-6 text-gray-1 items-center'>
                <span className='font-semibold  text-2xl'>Daniel Jensen</span>
                <span className='text-xs font-semibold'>2,569 Following</span>
                <span className='text-xs font-semibold'> 10.8K Followers</span>
              </div>
              <Button text='Follow'/>
            </div>
            <p className='font-medium text-lg text-gray-3'>Photographer & Filmmaker based in Copenhagen, <br /> Denmark ✵ 🇩🇰</p>
          </div>
      </div>
  )
}

export default ProfileInfo