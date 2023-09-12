"use client";
import Image from 'next/image'
import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { FaUserGroup } from 'react-icons/fa6'
import { AiTwotoneSetting } from 'react-icons/ai'
import { IoMdExit } from 'react-icons/io'
function Profile() {
  const [show, setShow] = React.useState(false)
  return (
    <div className='relative'>
      <div className='flex gap-3 items-center relative cursor-pointer' onClick={() => setShow(!show)}><Image src="/next.svg" width={32} height={36} alt='profile' /> <span className='text-gray-1 font-bold text-xs'>Xantha Neal</span> <MdArrowDropDown /></div>
      {show && <nav className='absolute top-7 left-0 bg-background shadow-md rounded-lg p-4'><ul className='flex flex-col gap-4'>
        <li className='w-40 h-10 flex items-center gap-3 font-medium text-xs text-gray-2'><CgProfile className="w-5 h-5" /> My Profile</li>
        <li className='w-40 h-10 flex items-center gap-3 font-medium text-xs text-gray-2'><FaUserGroup className="w-5 h-5" />Group Chat</li>
        <li className='w-40 h-10 flex items-center gap-3 font-medium text-xs text-gray-2'><AiTwotoneSetting className="w-5 h-5" /> Settings</li>
        <hr />
        <li className='w-40 h-10 flex items-center text-red gap-3 font-medium text-xs '><IoMdExit className="w-5 h-5" /> Logout</li>
      </ul></nav>}
    </div>
  )
}

export default Profile