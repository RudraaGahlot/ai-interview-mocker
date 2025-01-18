"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path = usePathname();
    useEffect(() => {
        console.log(path)
    },[])


  return (
    <div className="flex items-center  justify-between p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 ">
        <Image src="/logo.png" width={225} height={100} alt="logo" />
      </div>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium ">
        <li className={`hover:text-blue-600 hover:font-bold cursor-pointer ${path=='/dashboard' && 'text-primary font-bold' }`}>Dashboard</li>
        <li className={`hover:text-blue-600 hover:font-bold cursor-pointer ${path=='/dashboard/questions' && 'text-primary font-bold' }`}>Questions</li>
        <li className={`hover:text-blue-600 hover:font-bold cursor-pointer ${path=='/dashboard/upgarde' && 'text-primary font-bold' }`}>Upgrade</li>
        <li className={`hover:text-blue-600 hover:font-bold cursor-pointer ${path=='/dashboard/how' && 'text-primary font-bold' }`}>How it works?</li>
      </ul>
      
   
      <div className="flex items-center">
        <UserButton />
      </div>
    </div>
  )
}

export default Header