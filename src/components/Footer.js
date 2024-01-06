import React from 'react'
import { CONTACTINFO, SOCIALS, footerLink } from '../../constance'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    return (
        <div className='flex py-[120px] justify-between'>
            <h1 className='text-2xl'>Hi<span className='text-green-600'>link</span></h1>
            {
                footerLink.map((link) => (
                    <div key={link.id}>
                        <h1 className='text-xl font-semibold'>{link.heading}</h1>
                        {link.links.map((title, index) => (
                            <span className='block my-2' key={index}>{title}</span>
                        ))}
                    </div>
                ))
            }
            <div>
                <h1 className='text-xl font-semibold'>{CONTACTINFO.title}</h1>
                {CONTACTINFO.links.map((title, index) => (
                    <span className='block my-2' key={index}>{title.label} {title.value}</span>
                ))}
            </div>
            <div>
                <h1 className='text-xl font-semibold'>{SOCIALS.title}</h1>
                <div className='flex gap-3'>
                    {SOCIALS.links.map((icon, index) => (
                        <Image key={index} src={icon} height={20} width={30} alt='link' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer