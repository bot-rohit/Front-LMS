import React from 'react'
import Wheel from './Wheel'
import Wallet from './Wallet'

const Spin = () => {
  return (
    <div className='grid grid-cols-[60%_40%]  my-20'>
        <Wheel/>
        <Wallet/>

      
    </div>
  )
}

export default Spin
