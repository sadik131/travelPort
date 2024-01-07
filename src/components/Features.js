import Image from 'next/image'
import React from 'react'

function Features() {

    const Feature = ({ title, discription, icon }) => {
        return <div className=''>
           <Image className='p-10 rounded-full bg-green-600 ' src="/map.sv" alt='map' width={30} height={30} />
           <h1 className='text-3xl font-bold'>{title}</h1>
           <p className='text-gray-500'>{discription}</p>
        </div>
    }

    return (
        <div className='relative py-10 bg-bg-img-1 '>
            <Image src="/camp.svg" className='absolute right-[62%] top-8' width={30} height={20} />
            <h1 className='text-center text-6xl font-bold '>Our Features</h1>
            <div className='flex'>
                <div className='w-2/5'>
                    <Image className='h-[600px] ' src="/phone.webp" width={600} height={300} />
                </div>
                <div className='w-3/5 flex gap-4 h-fit'>
                    <Feature 
                    title="Real Maps Can Be Offline"
                    discription="We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location"
                    icon="/map.svg"
                    />
                    <Feature 
                    title="Real Maps Can Be Offline"
                    discription="We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location"
                    icon="/location.svg"
                    />
                    <Feature 
                    title="Real Maps Can Be Offline"
                    discription="We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location"
                    icon="/location.svg"
                    />
                    <Feature 
                    title="Real Maps Can Be Offline"
                    discription="We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location"
                    icon="/location.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Features