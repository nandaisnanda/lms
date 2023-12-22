"use client"
import { Button } from "@/components/ui/button";
import { Searchbar } from "./searchbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
export const Header  = () => {
    const {user}=useUser();
    const {router}=useRouter();
    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <div className="ml-80 p-10 border-b flex bg-red-900 flex items-center justify-between">
        <Searchbar />
        {!user? 
        <Button onClick={() => router.push('/sign-in')}>Login</Button>
        :
        <UserButton />
        }
        </div>

    )
}

export default Header