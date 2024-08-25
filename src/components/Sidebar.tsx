"use client"

import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = () => {

    const pathname = usePathname()

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='flex items-center gap-2'>
                <Image
                    src="/icons/logo.svg"
                    alt="logo image"
                    width={34}
                    height={34}
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Plazma</h1>
            </Link>
            {
                sidebarLinks.map((item, index)=>{

                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return <Link 
                        key={index}
                        href={item.route}
                        className={cn('sidebar-link',{'bg-bankGradient':isActive})}
                    >
                        <div className='relative size-6'>
                            <Image 
                                src={item.imgURL}
                                alt={item.label}
                                fill
                                className={cn({'brightness-[3] invert-0':isActive})}
                            />
                            
                        </div>
                        <p className={cn("sidebar-label",{'!text-white':isActive})}>{item.label}</p>
                    </Link>
                })
            }
        </nav>
    </section>
  )
}

export default Sidebar