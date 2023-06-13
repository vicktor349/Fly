import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/images/logo/logo.png'
import { Button, Input } from '@mantine/core'
import { GrMail } from 'react-icons/gr'

const Footer = () => {
    return (
        <div className='bg-[#7AF687] mt-12 py-12'>
            <div className='grid grid-cols-3 place-items-center mx-18'>
                <Link href='/'>
                    <Image src={Logo}
                        alt='Home logo'
                        height='auto'
                        width={140}
                        className='hover:cursor-pointer'
                        priority={true}
                    />
                </Link>
                <div className='flex justify-between'>
                    <Input type='text' icon={<GrMail />} placeholder='Enter E-mail Address' />
                    <Button variant='outline' className='ml-6'>
                        Subscribe
                    </Button>
                </div>
                <div>
                    <h1>Chat with us</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer