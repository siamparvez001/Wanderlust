"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
const BookingCard = ({ destination }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [departureDate, setDepartureDate] = useState(null)

    const { price, _id, destinationName, imageUrl,
        country } = destination;

    const handleBooking = async () => {
        const bookingData = {
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)
        }
        const res = await fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <Card className='rounded-none border my-5'>
            <p className='text-sm text-muted'>Starting from</p>
            <h3 className='text-4xl text-cyan-400 font-bold'>${price}</h3>
            <p className='text-sm text-muted'>per person</p>
            <DateField className="w-[256px]" name="date" onChange={setDepartureDate}>
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>
            <Button onClick={handleBooking} className={'rounded-none w-full bg-cyan-500'}>Book Now <FaArrowRight></FaArrowRight></Button>
            <div className='flex justify-start items-center gap-2'>
                <FcCheckmark></FcCheckmark>
                <p>Free cancellation up to 7 days</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <FcCheckmark></FcCheckmark>
                <p>Travel insurance included</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <FcCheckmark></FcCheckmark>
                <p>F24/7 customer support</p>
            </div>
        </Card>
    );
};

export default BookingCard;