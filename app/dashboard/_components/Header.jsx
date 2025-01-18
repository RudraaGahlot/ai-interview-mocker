// "use client"
// import { UserButton } from '@clerk/nextjs'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import React, { useEffect } from 'react'

// function Header() {

//     const path = usePathname();
//     useEffect(() => {
//         console.log(path)
//     },[])


//   return (
//     <div className="flex items-center  justify-between p-4 bg-white shadow-md">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-4 ">
//         <Image src="/logo.png" width={215} height={50} alt="logo" />
//       </div>
      
//       {/* Navigation Links */}
//       <ul className="hidden md:flex space-x-6 text-gray-700 font-bold ">
//         <li className={`hover:text-primary hover:font-bold cursor-pointer ${path=='/dashboard' && 'text-primary font-bold' }`}>Dashboard</li>
//         <li className={`hover:text-primary hover:font-bold cursor-pointer ${path=='/dashboard/questions' && 'text-primary font-bold' }`}>Questions</li>
//         <li className={`hover:text-primary hover:font-bold cursor-pointer ${path=='/dashboard/upgarde' && 'text-primary font-bold' }`}>Upgrade</li>
//         <li className={`hover:text-primary hover:font-bold cursor-pointer ${path=='/dashboard/how' && 'text-primary font-bold' }`}>How it works?</li>
//       </ul>
      
   
//       <div className="flex items-center">
//         <UserButton />
//       </div>
//     </div>
//   )
// }

// export default Header

"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation' // Import useRouter for navigation
import React, { useEffect } from 'react'

function Header() {
  const path = usePathname(); // Get current path
  const router = useRouter(); // Hook for routing

  useEffect(() => {
    console.log(path)
  }, [path]);

  // Helper function for navigation
  const navigate = (route) => {
    router.push(route); // Navigate to the specified route
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <Image src="/logo.png" width={245} height={100} alt="logo" 
        />
      </div>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-bold mr-24">
        <li
          className={`hover:text-primary hover:font-bold cursor-pointer ${
            path === '/dashboard' && 'text-primary font-bold'
          }`}
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold cursor-pointer ${
            path === '/dashboard/questions' && 'text-primary font-bold'
          }`}
          onClick={() => navigate('/dashboard/questions')}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold cursor-pointer ${
            path === '/dashboard/upgrade' && 'text-primary font-bold'
          }`}
          onClick={() => navigate('/dashboard/upgrade')}
        >
          Upgrade
        </li>
        
      </ul>
      
      {/* User Section */}
      <div className="flex items-center mr-5">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
