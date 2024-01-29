"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; //digunakan untuk mengenali lokasi saat ini

export default function Navbar(){
    const pathname = usePathname();
    const router = useRouter();
    return(
        <div className="flex bg-gray-800 py-2 px-3 justify-between">
            <div className="flex ">
                <h1 className="text-white">Navbar</h1>
                <ul className="flex ml-5">
                    <Link href="/">
                        <li className={`px-3 ${pathname == "/" ? "text-blue-300" : "text-white" } cursor-pointer `}>Home</li>
                    </Link>
                    <Link href="/about">
                        <li className ={`px-3  cursor-pointer ${pathname === "/about" ? "text-blue-300" : "text-white" }`}>About</li>
                    </Link>
                    <Link href="/about/profile">
                        <li className={`px-3  cursor-pointer ${pathname === "/about/profile" ? "text-blue-300" : "text-white"}`}>Profile</li>
                    </Link>
                </ul>

            </div>
            <div className=" ">
                    <button onClick={()=>router.push("/Login")}className=" bg-white rounded-lg px-3 h-7 cursor-pointer">Login</button>
                </div>
        </div>
    )
}