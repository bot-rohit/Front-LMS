import React from 'react'
import  Nav from '@/components/creators/comman/Navbar'
import Header from '@/components/creators/profile/header'
import Left from '@/components/creators/proof/Left'
import Right from '@/components/creators/proof/Right'

const page = () => {
  return (
    <div>
        <Nav/>
        <Header/>
        <div className='mt-10 flex '>
            <div className='w-[35%] pl-10 pr-10 '>
                <Left/>


            </div>
            <div className='w-[70%] px-10'>
                <Right/>


            </div>

        </div>
      
    </div>
  )
}

export default page
