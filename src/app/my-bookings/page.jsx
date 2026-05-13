import BookingCancelAlert from '@/components/BookingCancelAlert';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { SlCalender } from 'react-icons/sl';
import { TbTrash } from 'react-icons/tb';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    const bookings = await res.json()
    const length = bookings.length
    console.log(bookings.length)
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-4xl text-cyan-500 mb-5 px-10'>My Bookings</h1>
            <div className='flex flex-col gap-5 '>
                
                {bookings.length>0 ?(
                    bookings.map(booking =>
                        <div key={booking._id}>
                            <div className='border flex justify-start items-center gap-10  p-3'>
                                <div>
                                    <Image
                                        src={booking.imageUrl}
                                        alt={booking.destinationName}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 my-3 text-4xl font-bold">
                                        {/* <LuMapPin> </LuMapPin> */}
                                        <span className="">{booking.country}</span>
                                    </div>
                                    <div className="flex gap-2 items-center my-3 text-muted">
                                        <SlCalender></SlCalender>
                                        <p>Departure: </p>
                                        <h1>{new Date(booking.departureDate).toLocaleDateString(
                                            "en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        }
                                        )}</h1>

                                    </div>
                                    <p className='text-muted'>Booking Id: {booking._id}</p>
                                    <div className='fle flex-row  items-center'>
                                        <div>
                                            <p className='text-3xl text-cyan-500 font-semibold'>$ {booking.price}</p>
                                        </div>
                                        <div>
                                            <div className='flex mt-3 gap-5'>
                                                <BookingCancelAlert bookingId={booking._id}>
                                                    {/* <Button className={'rounded-none text-red-500'} variant='outline'> <TbTrash></TbTrash> Delete</Button> */}
                                                </BookingCancelAlert>
                                                <Button className={'rounded-none'}>View</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : 
                    (
                        <p className='text-4xl font-bold text-center my-10'>No booking found</p>
                    )
                }
            </div>
        </div>
    );
};

export default MyBookingPage;