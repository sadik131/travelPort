import Image from 'next/image'
import React from 'react'

function Destication() {
  return (
    <div className='border-green-300 py-14 h-[350px] bg-bg-bort rounded-3xl'>
      <div className='bg-white w-[20%] mx-5 rounded-2xl flex'>
        <Image src="/meter.svg" width={30} height={120} />
        <div className='px-5 w-full'>
          <div className='flex justify-between w-full '>
            <h3 className='font-semibold text-gray-600'>Destination</h3>
            <h1 className='text-green-500 font-bold'>48 min</h1>
          </div>
          <h1 className='mt-2 font-bold'>Aguas Calientes</h1>
          <div className='flex flex-col mt-14'>
            <h1 className='font-semibold text-gray-600'>Start track</h1>
            <h2 className=' font-bold'>Wonorejo Pasuruan</h2>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Destication