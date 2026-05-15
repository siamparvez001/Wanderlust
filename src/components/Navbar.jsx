"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const pathname = usePathname();
    const router = useRouter();



    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/login")
    };
    return (
        <nav className="mx-auto px-10 flex justify-between items-center bg-white py-5">
            <ul className="flex  gap-5">
                <li>
                    <Link href={"/"} className={pathname === "/" ? "text-cyan-500 font-bold" : ""}>Home</Link>
                </li>
                <li>
                    <Link href={"/destinations"} className={pathname === "/destinations" ? "text-cyan-500 font-bold" : ""}>Destinations</Link>
                </li>
                <li>
                    <Link href={"/my-bookings"} className={pathname === "/my-bookings" ? "text-cyan-500 font-bold" : ""}>My Bookings</Link>
                </li>

                <li>
                    <Link href={"/add-destination"} className={pathname === "/add-destination" ? "text-cyan-500 font-bold" : ""}>Add Destination</Link>
                </li>
            </ul>

            <div>
                <Image
                    src={"/assets/Wanderlast.png"}
                    height={150}
                    width={150}
                    alt="logo"
                />
            </div>

            <ul className="flex items-center gap-3">
                <li>
                    <Link href={"/profile"} className={pathname === "/profile" ? "text-cyan-500 font-bold" : ""}>Profile</Link>
                </li>

                { user ? (
                    <>
                        <li>
                            <Avatar>
                                <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                        </li>
                        <li>
                            <Button onClick={handleSignOut} variant="danger" className={"rounded-none"}>
                                Logout
                            </Button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href={"/login"} className={pathname === "/login" ? "text-cyan-500 font-bold" : ""}>Login</Link>
                        </li>
                        <li>
                            <Link href={"/signup"} className={pathname === "/signup" ? "text-cyan-500 font-bold" : ""}>Sign Up</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;