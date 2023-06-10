import React from 'react'

const Rides = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-5xl font-bold text-center'>RIDES</h1>
            <div className='text-center grid grid-cols-3 mt-20'>
                <div>
                    <h1 className='font-bold'>CARS</h1>
                    <p className='cursor-pointer hover:underline hover:font-bold'>Standard</p>
                    <p className='cursor-pointer hover:underline hover:font-bold'>Luxury</p>
                </div>
                <div>
                    <h1 className='font-bold'>SPACE BUSES</h1>
                    <p className='cursor-pointer hover:underline hover:font-bold'>Sienna</p>
                    <p className='cursor-pointer hover:underline hover:font-bold'>Bus</p>
                </div>
                <div>
                    <h1 className='font-bold'>TRUCK</h1>
                    <p className='cursor-pointer hover:underline hover:font-bold'>Hilux Tacoma</p>
                    <p className='cursor-pointer hover:underline hover:font-bold'>Hualage Trucks</p>
                </div>
            </div>
        </div>
    )
}

export default Rides