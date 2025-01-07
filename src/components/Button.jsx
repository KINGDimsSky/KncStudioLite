import React from 'react'
import { cn } from '../lib'

const Button = ({children, className, Logo, link, type}) => {
  return (
    <button  type={type} className={cn(`flex items-center justify-center border border-gray-300 rounded-md gap-1 py-1 mb-4`, className)}>
      {Logo}
      <a className='text-sm tracking-tight font-medium'>{children}</a>
    </button>
  )
}

export default Button