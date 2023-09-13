import Image from 'next/image'
import React from 'react'
import HeaderNavigation from './header-navigation'
import Profile from './profile'

function Header() {
  return (
    <header className='flex justify-between items-center'>
      <Image src="/tweeter.svg" height={20} width={124} alt='tweeter logo' />
     <HeaderNavigation /> 
     <Profile /></header>
  )
}

export default Header