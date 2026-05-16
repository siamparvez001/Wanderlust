import { Button } from '@heroui/react';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import DestinationCard from './DestinationCard';
import Link from 'next/link';
const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const destinations = await res.json()
    console.log(destinations)
    return (
        <div className='max-w-7xl mx-auto my-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-bold mt-5 mb-2'>Featured Destinations</h1>
                    <p className='text-muted'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <div>
                    <Link href={"/destinations"}>
                        <Button className={'rounded-none px-5 py-3 text-cyan-400'} variant='outline'>ALL  DESTINATIONS <FaArrowRightLong></FaArrowRightLong></Button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {destinations.map(destination =>
                    <DestinationCard key={destination._id} destination={destination}></DestinationCard>
                )}
            </div>
        </div>
    );
};

export default Featured;