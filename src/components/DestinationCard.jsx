import { Button } from "@heroui/react";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { RiExternalLinkFill } from "react-icons/ri";
import Link from "next/link";
const DestinationCard = ({ destination }) => {
    const { _id, country, duration, imageUrl, price, destinationName } = destination;
    return (
        <div className="border">
            <div className="p-3">
                <Image
                    alt={destinationName}
                    src={imageUrl}
                    width={400}
                    height={400}
                />
                <div>
                    <div className="flex items-center gap-2">
                        <LuMapPin> </LuMapPin>
                        <span className="">{country}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">{destinationName}</h2>
                            </div>
                            <div className="flex gap-2 items-center">
                                <SlCalender></SlCalender>
                                <h1>{duration}</h1>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">${price}</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <Link href={`/destinations/${_id}`}>
                        <Button variant="ghost" className={'text-cyan-500 my-2'}>Book Now <RiExternalLinkFill></RiExternalLinkFill></Button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default DestinationCard;