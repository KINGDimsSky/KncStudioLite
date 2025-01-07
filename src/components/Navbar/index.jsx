import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import IconKnc from '../../assets/IconKnc.png'
import { ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    return(
     <div className="flex bg-black items-center h-14">
        <MaxWidthWrapper className="flex justify-between items-center">
            <img onClick={() => window.location.href = '/'} className='w-8 cursor-pointer' src={IconKnc} alt="KncStudio"/>
            <div className="flex items-center  text-white">
              <div className="border-r">
               <a className='m-9 hover:text-purple-300' href="">Sign In</a>
              </div>
              <div className="border-r">
               <a className='m-9  hover:text-purple-300' href="">Create Account</a>
              </div>
              <ShoppingCart className='ml-6 cursor-pointer  hover:text-purple-300'/> <span className='ml-3 flex items-center'>0</span>
            </div>
        </MaxWidthWrapper>
     </div>
    )
}

export default Navbar