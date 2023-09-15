import Button from '@/components/button'
import HeaderImage from '@/components/header-image'
import ProfileInfo from '@/components/profile-info'
import Image from 'next/image'
import React from 'react'

type ProfileProps = {
  params: {
    id: string
  }
}


function Profile({params} : ProfileProps) {
  console.log(params)
  return (
    <div>
      <div className='relative'>
        <HeaderImage/>
        <div className='w-4/5 absolute -bottom-28 left-1/2 -translate-x-1/2'><ProfileInfo/></div>
      </div>
     
    </div>
  )
}

export default Profile