import Image from 'next/image'
import React from 'react'

function Cump() {
  return (
    <div className='py-10 '>
        <div className='flex hide-scrollbar overflow-x-auto gap-10'>
            <Image className='rounded-3xl' src="/img-1.png" width={950} height={300}/>
            <Image className='rounded-3xl' src="/img-2.png" width={950} height={300}/>
        </div>
        <div>
            sdjf
        </div>
    </div>
  )
}

export default Cump