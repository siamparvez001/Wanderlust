"use client";

import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { TbTrash } from 'react-icons/tb';

const BookingCancelAlert =  ({bookingId}) => {
    const handleCancelBooking = async() =>{
        const {data:tokendata} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,{
            method: "DELETE",
            headers: {
                "content-type" : "application/json",
                authorization : `Bearer ${tokendata?.token}`
            }
        })
        const data =  await res.json()
        window.location.reload()
        
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="danger" className={"rounded-none"}><TbTrash></TbTrash> Cancel</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>cancel destination?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>My Awesome Project</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                    Cancel destination
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default BookingCancelAlert;