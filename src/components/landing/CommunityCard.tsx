import React from 'react'
import Image from 'next/image'

type Coming = { 
    stars:number,
    data:string,
    profile:string , 
    name:string ,
    role:string , 

}
type Prop  = {
    data: Coming,
}

const CommunityCard = ({data}:Prop) => {
  return (
    <div>
        <div>
            <p>asd</p>
            <Image src="#" width={10} height={10} alt='hi' />
          
        </div> 
        <div>
        </div>
        <div>
        </div>       
      
    </div>
  )
}

export default CommunityCard
