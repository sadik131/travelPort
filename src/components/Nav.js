import Link from 'next/link'
import React from 'react'
import { linkItem } from '../../constance'
import Button from './Button'

export default function Nav() {
    return (
        <div className='flex justify-between py-5 '>
            <h1 className='text-2xl'>Hi<span className='text-green-600'>link</span></h1>
            <div className='flex items-center'>
                <ul>
                    {linkItem.map(link=>(
                         <Link className='mx-2 font-medium' href={link.href} key={link.id}>{link.lable}</Link>
                    ))}
                </ul>
                <Button 
                title="Login"
                icon="/user.svg"
                varient="darkBtn"
                ></Button>
            </div>
        </div>
    )
}
