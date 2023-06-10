import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/images/logo/logo.png'
import { CiMenuBurger } from 'react-icons/ci'
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';


const Navbar = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div className='flex justify-end items-end bg-[#7AF687]'>
            <div className='mr-auto mx-24 md:ml-16 sm:ml-12 ssm:ml-4'>
                <h1 className='text-6xl font-bold tracking-wide' >
                    <Link href='/'>
                        <Image src={Logo}
                            alt='Home logo'
                            height={80}
                            width={140}
                            className='hover:cursor-pointer'
                        />
                    </Link>
                </h1>
                <p className='text-xl font-bold text-white'>ride in comfort & safety</p>
            </div>
            <div className='flex justify-center items-center mb-10 mr-24 md:mr-16 md:inline-block ssm:hidden'>
                <Button variant="outline" color="green">
                    Sign In
                </Button>
            </div>
            <div className='flex justify-center items-center cursor-pointer mr-16 text-3xl font-bold mb-8 md:hidden sm:inline-block ssm:mr-4'>
                <CiMenuBurger
                    className='text-white'
                    onClick={open}
                />
                <Drawer opened={opened} onClose={close} position='right' size='50%' overlayProps={{ opacity: "0.55", blur: "10" }}>
                    <Button variant='outline' color='green' className='mt-5 flex mx-auto'>
                        Sign In
                    </Button>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar