'use client'

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const MobileNav = () => {

    const pathname = usePathname();

  return (
    <section>
        <Sheet>
            <SheetTrigger>
                <Image
                    src="/icons/hamburger.svg"
                    width={30}
                    height={30}
                    alt="menu"
                    className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent side={'right'} className='bg-white'>
                <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
                    <Image 
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="Horizon logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Plazma</h1>
                </Link>
                <SheetClose asChild>
                    <nav className='flex flex-col gap-4 h-full pt-16'>
                    {
                        sidebarLinks.map((item, index)=>{

                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                            return <Link 
                                key={index}
                                href={item.route}
                                className={cn('mobilenav-sheet_close w-full',{'bg-bankGradient':isActive})}
                            >
                                <div className='relative size-6'>
                                    <Image 
                                        src={item.imgURL}
                                        alt={item.label}
                                        fill
                                        className={cn({'brightness-[3] invert-0':isActive})}
                                    />
                                    
                                </div>
                                <p className={cn("text-16 font-semibold text-black-2",{'!text-white':isActive})}>{item.label}</p>
                            </Link>
                        })
                    }
                    </nav>
                </SheetClose>
            </SheetContent>
        </Sheet>

    </section>
  )
}

export default MobileNav