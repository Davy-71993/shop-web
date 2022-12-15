import React from 'react'

export default function Container({children}) {
  return (
    <div className='px-5 sm:px-[2rem] md:px-[4rem] lg:px-[6rem] py-5'>
        {children}
    </div>
  )
}
