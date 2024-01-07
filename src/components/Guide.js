import Image from 'next/image'
import React from 'react'

function Guide() {
    return (
        <div className='flex justify-between items-center py-24'>
            <div className='w-[35%]'>
                <Image src="/camp.svg" width={30} height={20} alt='camp' />
                <h3 className='text-green-500 text-xl'>WE ARE HERE FOR YOU</h3>
                <h1 className='text-7xl font-bold'>Guide You to Easy Path</h1>
            </div>
            <div className='w-1/2'>
                <p className='text-xl text-gray-800'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
            </div>
        </div>
    )
}

export default Guide