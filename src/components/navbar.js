'use client'
import {useState} from 'react'

const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const handleMenu= ()=> {
    // alert('called')
    setToggle(!toggle)
  }
  return (
    <>
    <nav class="bg-gray-800 text-white px-8 py-4">
    <div class="flex justify-between items-center relative">
      <div class="text-xl font-bold">MyWebsite</div>
      <div onClick={handleMenu} className='md:hidden'>
         Menu
      </div>
      {toggle ? <div class="flex flex-col justify-center bg-gray-400 text-white gap-4 p-4 absolute top-10 right-0">
        <a href="#" class="hover:text-gray-400">Home</a>
        <a href="#" class="hover:text-gray-400">About</a>
        <a href="#" class="hover:text-gray-400">Services</a>
        <a href="#" class="hover:text-gray-400">Contact</a>
      </div> : ''}
      <div class="hidden md:block space-x-4">
        <a href="#" class="hover:text-gray-400">Home</a>
        <a href="#" class="hover:text-gray-400">About</a>
        <a href="#" class="hover:text-gray-400">Services</a>
        <a href="#" class="hover:text-gray-400">Contact</a>
      </div>
    </div>
  </nav>
  <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 px-10 py-5'>

    <div className='h-[120px] w-[120px] bg-red-300 shadow-lg'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>

    <div className='h-[120px] w-[120px] bg-red-300 border-1'> 
    </div>
  </div>

  </>
  )
}

export default Navbar
