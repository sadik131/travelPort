import Image from 'next/image'
import React from 'react'
import Button from './Button'

function Hero() {
    return (
        <div className='flex'>
            <div className='w-1/2'>
                <Image src="/camp.svg" width={40} height={30} alt='camp' />
                <h1 className='text-8xl font-bold my-3'>Putuk Truno Camp Area</h1>
                <p className='text-2xl text-gray-600 font-semibold my-2'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
                <div className='flex my-7'>
                    {Array(5).fill(1).map((_, index) => (
                        <Image src="/star.svg" key={index} height={15} width={25} alt='start' />
                    ))}
                    <h1 className='text-2xl'><span className='font-bold'> 198k</span> Excellent Reviews</h1>
                </div>
                <div className='flex gap-4'>
                    <Button title="Download app" varient="smothGreen"></Button>
                    <Button title="How to work" varient="textColor"></Button>
                </div>
            </div>


            <div className='w-1/2 flex items-center justify-center'>
                <div className='darkBtn w-1/2 flex flex-col justify-center p-5 rounded-3xl'>
                    <div className='my-4'>
                        <div className='flex justify-between gap-3'>
                            <h3 className='text-[22px] text-gray-300'>location</h3>
                            <span>X</span>
                        </div>
                        <h1 className='text-2xl font-semibold'>Aguas Calientes</h1>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-[22px] text-gray-300'>Distance</h3>
                            <h1 className='text-2xl font-semibold'>173.28 mi</h1>
                        </div>
                        <div>
                            <h3 className='text-[22px] text-gray-300'>Elevation</h3>
                            <h1 className='text-2xl font-semibold'>2.040 km</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero