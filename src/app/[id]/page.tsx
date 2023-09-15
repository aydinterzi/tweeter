import Button from '@/components/button'
import ExploreFilter from '@/components/explore-filter'
import HeaderImage from '@/components/header-image'
import ProfileInfo from '@/components/profile-info'
import Tweet from '@/components/tweet'
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
        <div className='w-full px-44 absolute -bottom-28 left-1/2 -translate-x-1/2'><ProfileInfo/></div>
      </div>
      <div className="flex gap-6 px-44 mt-40">
      <div className="basis-1/4">
      <ExploreFilter/>
      </div>
      <div className="basis-3/4 flex flex-col gap-14">
      
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>
      </div>
     
    </div>
  )
}

export default Profile