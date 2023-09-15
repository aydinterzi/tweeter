import Image from 'next/image'
import React from 'react'

function HeaderImage() {
  return (
    <div className='w-full h-64 relative bg-red/50'>
        <Image alt='header' src="./vercel.svg" fill/>
    </div>
  )
}

export default HeaderImage