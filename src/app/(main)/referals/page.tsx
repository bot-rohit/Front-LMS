import React from 'react'
import Invite from '@/components/referal/Invite'
import Card from '@/components/referal/Card'
import Email from '@/components/referal/Email'
import Ref from '@/components/referal/Ref'
import Cdashboard from '@/components/common/dashboard/Commondash'


const page = () => {
    return (
        <div>
            <div className='pb-10'>

                <Cdashboard dashboard='Referrals' />
            </div>
            <Invite />
            <Email />
            <Ref />
            <Card />

        </div>
    )
}

export default page
