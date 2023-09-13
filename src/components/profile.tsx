"use client";
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { FaUserGroup } from 'react-icons/fa6'
import { AiTwotoneSetting } from 'react-icons/ai'
import { IoMdExit } from 'react-icons/io'
function Profile() {
  const [show, setShow] = React.useState(false)
  const modalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative'>
      <div className='flex gap-3 items-center relative cursor-pointer' onClick={() => setShow(!show)}><Image src="/next.svg" width={32} height={36} alt='profile' /> <span className='text-gray-1 font-bold text-xs'>Xantha Neal</span> <MdArrowDropDown /></div>
      {show && <nav ref={modalRef} className='absolute top-11 left-0 bg-white shadow-full rounded-lg p-4'><ul className='flex flex-col gap-4'>
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