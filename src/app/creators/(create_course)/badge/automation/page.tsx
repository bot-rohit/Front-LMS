import React from 'react'
import Nav from '@/components/creators/dashboard/Nav'
import AddAuto from '@/components/create_course/badges/automation/AddAuto'
import Predefined from '@/components/create_course/badges/automation/Predefined'
const page = () => {
  return (
    <div>
        <Nav/>
        <AddAuto/>
        <Predefined/>
      
    </div>
  )
}

export default page
