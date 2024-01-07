import Image from 'next/image'
import React from 'react'
import Button from './Button'
// bg-bg-img-1
function Banner() {
  return (
    <div className='w-full py-10 flex bg-bg-img-1  items-center '>
      <div className='w-1/2'>
        <h1 className='text-7xl font-bold'>Get for</h1>
        <h1 className='text-7xl font-bold'>free now!</h1>
        <p className='my-10'>Available on iOS and Android</p>
        <div className='flex gap-3'>
          <Button title="App Store" varient="buttonWhite"></Button>
          <Button title="Play Store" varient="buttonTrensparent"></Button>
        </div>
      </div>
      <div className='w-1/2'>
        <Image src="/phones.webp" width={450} height={550} alt='mobile' />
      </div>
    </div>
  )
}

export default Banner