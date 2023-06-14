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
import Loader from '@/components/Loader';


const dashboard = () => {
    const id = useId()
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const { data: session, status } = useSession()

    const handleSubmit = (e) => {
        e.preventDefault()
        const sendMessage = async () => {
            try {
                const response = await axios.post('/api/proxy', {
                    body: `
                        Email: ${email} \n
                        Phone Number: ${phone} \n
                        city: ${city}
                    `,
                    from: 'whatsapp:+14155238886',
                    to: 'whatsapp:+2348154552075',
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        sendMessage();
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
                            <form action="" className='sm:w[30rem] md:w-[30rem] lg:w-[40rem]'>
                                <h1 className='mb-4'>Book Ride</h1>
                                <Input.Wrapper label='Email' className='mb-4'>
                                    <Input placeholder='Enter Your E-mail Address' icon={<IoAtSharp />} onChange={(e) => setEmail(e.target.value)} />
                                </Input.Wrapper>
                                <Input.Wrapper id={id} label="Phone">
                                    <Input
                                        icon={<BsTelephone />}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className='mb-4'
                                        component={IMaskInput}
                                        mask="+234 0000000000"
                                        id={id}
                                        placeholder="Your phone"
                                    />
                                </Input.Wrapper>
                                <Select
                                    icon={<FaCity />}
                                    label="City"
                                    onSearchChange={setCity}
                                    searchValue={city}
                                    placeholder="Pick one city"
                                    searchable
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
                                <Button variant='outline' className='mt-4' type='submit' onClick={handleSubmit}>
                                    Book
                                </Button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        )
    } else {
        <div>
            <Loader />
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