import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        // <nav className="max-w-7xl mx-auto  grid grid-cols-3 justify-between items-center bg-white py-5">
        <nav className="mx-auto px-10 flex justify-between items-center bg-white py-5">
            <ul className="flex  gap-5">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/destinations"}>Destinations</Link>
                </li>
                <li>
                    <Link href={"/my-bookings"}>My Bookings</Link>
                </li>

                <li>
                    <Link href={"/add-destination"}>Add Destination</Link>
                </li>
            </ul>

            <div className="">
                {/* <Image
                    src={"/assets/Wanderlast.png"}
                    height={150}
                    width={150}
                    alt="logo"
                /> */}
                <h1 className="text-3xl text-sky-300 font-bold">Wanderlast</h1>
            </div>

            <ul className="flex  gap-5">
                <li>
                    <Link href={"/profile"}>Profile</Link>
                </li>
                <li>
                    <Link href={"/login"}>Login</Link>
                </li>
                <li>
                    <Link href={"/signup"}>Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;