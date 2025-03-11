import React from 'react'
import { Link} from 'react-router'

const Navbar = () => {
  return (
    <>

      <nav className='flex w-[100%] p-[20px] bg-blue-500 text-white 
      text-lg font-semibold shadow-lg'>
        
     <ul className='flex lg:gap-5 lg:w-[20%] w-[30%] gap-6  justify-between '>
        <Link to="/"><li>Home</li></Link>
        <Link to="/About"><li>About</li></Link>
     </ul>

      </nav>


    </>
  )
}

export default Navbar