import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/creators/comman/Lvheader'
import Sessions from '@/components/creators/live/Sessions'

const page = () => {
  return (
    <div>
        <Nav/>
        <Sessions/>
    
      
    </div>
  )
}

export default page
