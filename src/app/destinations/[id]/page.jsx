import BookingCard from "@/components/BookingCard";
import DeleteAlert from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();
  // console.log(destination);
  const {
    _id,
    country,
    duration,
    imageUrl,
    price,
    destinationName,
    description,
  } = destination;
  // console.log(id)
  return (
    <div className="max-w-7xl mx-auto px-10"> 
      <div className="flex justify-end items-center gap-5">
        <EditModal destination={destination}></EditModal>
        <DeleteAlert destination={destination}></DeleteAlert>
      </div>
      <Image
        className="w-full object-cover"
        alt={destinationName}
        src={imageUrl}
        width={800}
        height={100}
      />
      <div className="flex justify-between items-center">
        <div className="p-2">
          <div className="flex items-center gap-2 my-3 text-2xl">
            <LuMapPin> </LuMapPin>
            <span className="">{country}</span>
          </div>
          <div className="flex justify-start gap-20 items-center">
            <div>
              <div>
                <h2 className="text-xl font-bold">{destinationName}</h2>
              </div>
              <div className="flex gap-2 items-center">
                <SlCalender></SlCalender>
                <h1>{duration}</h1>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-5">Overview</h1>
          <p>{description}</p>
        </div>
        <BookingCard destination={destination}></BookingCard>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
