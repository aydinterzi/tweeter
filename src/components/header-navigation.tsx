"use client";

import Link from 'next/link'
import React, { useState } from 'react'

function HeaderNavigation() {
  const [active, setActive] = useState('home')
  return (
    <nav className='flex justify-between items-center text-sm font-medium text-gray-3 gap-16'>
      <Link href='/' className={`${active === 'home' ? 'font-semibold text-blue-1 border-b-2 border-blue-1' : ''} p-4`} onClick={() => setActive('home')}>Home</Link>
      <Link href='/explore' className={`${active === 'explore' ? 'font-semibold text-blue-1 border-b-2 border-blue-1' : ''} p-4`} onClick={() => setActive('explore')}>Explore</Link>
      <Link href='/bookmarks' className={`${active === 'bookmarks' ? 'font-semibold text-blue-1 border-b-2 border-blue-1' : ''} p-4`} onClick={() => setActive('bookmarks')}>Bookmarks</Link>
    </nav>
  )
}

export default HeaderNavigation