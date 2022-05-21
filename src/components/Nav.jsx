import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

const Nav = () => {
  return (
    <div className='bg-red h-16'>
      <div className='container  mx-auto flex justify-between items-center text-primary h-full'>
        {/* logo */}
        <div>
          <h1 className='text-2xl '>A</h1>
        </div>
        {/* nav */}
        <nav className='flex items-center'>
          <ul className='hidden md:flex gap-5 mr-4'>
            <li><a href="#">About</a></li>
            <li><a href="#">Experiance</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
            <button className='border-2 border-btn px-4 py-2 rounded'>Resume</button>
        </nav>
        {/* menu icon */}
        <div className='sm:hidden'>
          <HiMenuAlt3 />
        </div>
      </div>
    </div>
  )
}

export default Nav