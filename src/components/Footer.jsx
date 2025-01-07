import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Footer = () => {
  return (
    <div className="flex flex-col h-12 bg-black">
        <MaxWidthWrapper className="flex items-center justify-center border-t border-gray-700">
            <h2 className='text-white'>Knc Studio</h2>
        </MaxWidthWrapper>
    </div>
  )
}

export default Footer