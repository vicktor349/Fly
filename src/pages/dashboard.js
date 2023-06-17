import React, { useState } from 'react'
import Head from 'next/head'
import { Button, Input } from '@mantine/core'
import { Select } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';
import { IoAtSharp } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { FaCity } from 'react-icons/fa'
import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import PreLoader from '@/components/PreLoader';
import { Loader } from '@mantine/core';
import { AiFillCar } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

const dashboard = () => {
    const id = useId()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [destination, setDestination] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { data: status } = useSession()

    const handleSubmit = (e) => {
        e.preventDefault()
        const sendMessage = async () => {
            try {
                const response = await axios.post('/api/proxy', {
                    body: `
                        Hello FLYPS my name is ${name}, at ${city} going to ${destination}, You can contact with through ${phone} or ${email}
                    `,
                    from: 'whatsapp:+14155238886',
                    to: 'whatsapp:+2348124165949',
                });
                if (response.data.success) {
                    setIsSubmitting(false)
                }
                console.log(response.data);
                console.log(email, phone, city, name, destination)
            } catch (error) {
                console.error(error);
            }
        };
        sendMessage();
        setIsSubmitting(true)
    }

    if (status === 'authenticated') {
        return (
            <div className='bg-[#7AF687] h-screen'>
                <div>
                    <Head>
                        <title>FLYPS | Dashboard</title>
                    </Head>
                </div>
                <main>
                    <div className='h-screen w-full flex items-center justify-center'>
                        <div className='px-16 py-20 bg-white'>
                            <form className='sm:w[30rem] md:w-[30rem] lg:w-[40rem]'>
                                <h1 className='mb-4'>Book Ride</h1>
                                <Input.Wrapper label='Name' className='mb-4'>
                                    <Input
                                        placeholder='Enter Your Name'
                                        icon={<CgProfile />}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Input.Wrapper>
                                <Input.Wrapper label='Email' className='mb-4'>
                                    <Input placeholder='Enter Your E-mail Address'
                                        icon={<IoAtSharp />}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Input.Wrapper>
                                <Input.Wrapper id={id} label="Phone">
                                    <Input
                                        icon={<BsTelephone />}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className='mb-4'
                                        component={IMaskInput}
                                        mask="+234 0000000000"
                                        id={id}
                                        required
                                        placeholder="Your phone"
                                    />
                                </Input.Wrapper>
                                <Select
                                    className='mb-4'
                                    icon={<FaCity />}
                                    label="City"
                                    onSearchChange={setCity}
                                    searchValue={city}
                                    placeholder="Pick one city"
                                    searchable
                                    required
                                    nothingFound="No options"
                                    data={[
                                        { value: 'Afao', label: 'Afao' },
                                        { value: 'Aisegba', label: 'Aisegba' },
                                        { value: 'Aramoko-Ekiti', label: 'Aramoko-Ekiti' },
                                        { value: 'Ayedun', label: 'Ayedun' },
                                        { value: 'Efon', label: 'Efon' },
                                        { value: 'Emure', label: 'Emure' },
                                        { value: 'Erinmope', label: 'Erinmope' },
                                        { value: 'Ido', label: 'Ido' },
                                        { value: 'Igede', label: 'Igede' },
                                        { value: 'Ijero', label: 'Ijero' },
                                        { value: 'Ikere', label: 'Ikere' },
                                        { value: 'Ikole', label: 'Ikole' },
                                        { value: 'Ilawe', label: 'Ilawe' },
                                        { value: 'Ise', label: 'Ise' },
                                        { value: 'Iye', label: 'Iye' },
                                        { value: 'Iyin', label: 'Iyin' },
                                        { value: 'Ode', label: 'Ode' },
                                        { value: 'Odo-Oro', label: 'Odo-Oro' },
                                        { value: 'Ogotun', label: 'Ogotun' },
                                        { value: 'Okemesi', label: 'Okemesi' },
                                        { value: 'Omuo', label: 'Omuo' },
                                        { value: 'Otun', label: 'Otun' },
                                        { value: 'Oye-Ekiti', label: 'Oye-Ekiti' }
                                    ]}
                                />
                                <Input.Wrapper label='Destination'>
                                    <Input placeholder='Enter Destination'
                                        icon={<AiFillCar />}
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                </Input.Wrapper>
                                {
                                    isSubmitting ?
                                        <Button disabled className='mt-4' color='green'>
                                            Booking...<Loader size="xs" color='green' className='ml-4' />
                                        </Button>
                                        :
                                        <Button variant='outline' color='green' className='mt-4' type='submit' onClick={handleSubmit}>
                                            Book
                                        </Button>
                                }
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        )
    } else {
        <div>
            <PreLoader />
        </div>
    }
}

export default dashboard


export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }
    return {
        props: { session }
    }
}