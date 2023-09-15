import React from 'react'
import Button from './button'
import Image from 'next/image'

function ProfileInfo() {
  return (
    <div className='flex p-6 rounded-lg shadow-md bg-white gap-6'>
          <div className='basis-1/5'>
            <Image src="./next.svg" width={150} height={150} alt='profile photo'/>
          </div>
          <div className='basis-full'>
            <div className='flex justify-between'>
              <div className='flex gap-6'>
                <span>Daniel Jensen</span>
                <span>2,569 Following</span>
                <span> 10.8K Followers</span>
              </div>
              <Button text='Follow'/>
            </div>
            <p>Photographer & Filmmaker based in Copenhagen, <br /> Denmark ✵ 🇩🇰</p>
          </div>
      </div>
  )
}

export default ProfileInfo