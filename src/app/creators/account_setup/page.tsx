import React from 'react'
import Setup from '@/components/creators/account/setup'
import  Nav from '@/components/creators/comman/Navbar'

const page = () => {
  return (
    <div className='flex flex-col '>
        <Nav/>
        <Setup/>
      
    </div>
  )
}

export default page
