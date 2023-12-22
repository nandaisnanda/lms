'use client'
import { Layout, Mail, SearchCodeIcon, Shield, User } from 'lucide-react'
import  Image  from 'next/image'
import { useState } from 'react'

export const Sidebarnav  = () => {
    const menuList =[
        {
            id: 1, 
            name:'Browse',
            icon:SearchCodeIcon, 
            path:'/browse',
        },
        {
            id: 2, 
            name:'Dashboard',
            icon:Layout, 
            path:'/dashboard',
        },
        {
            id: 3, 
            name:'Upgrade',
            icon:Shield, 
            path:'/upgrade',
        },
        {
            id: 4, 
            name:'Profile',
            icon:User, 
            path:'/profile',
        },
        {
            id: 5, 
            name:'Newsletter',
            icon:Mail, 
            path:'/newsletter',
        },
    ]
    const[activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='h-full bg-black border-r flex flex-col overflow-y-auto shadow-md '>
            <div className='p-5 border-b '>
            <Image src='/sclogo.png'
            alt='logo'
            width={400}
            height={150} />
            </div>
            <div className='flex flex-col text-white text-xl'>
                {menuList.map((item,index)=>(
                  <div className={`flex gap-2 item-center p-5 px-5 hover:bg-red-900 cursor-pointer
                ${activeIndex==index? 'bg-red-900':null}`}
                  onClick={()=>setActiveIndex(index)}>
                    <item.icon/>
                    <h2>{item.name}</h2>
                  </div>  
                ))}
            </div>
            </div>
    )
}
export default Sidebarnav