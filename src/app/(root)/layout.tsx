import Sidebar from '@/components/Sidebar';
import React from 'react'
import Image from "next/image"
import MobileNav from '@/components/MobileNav';

const RootLayout = ({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <main className='flex h-screen font-inter'>
        <Sidebar/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            <div>
              <MobileNav />
            </div>
          </div>
          {children}
        </div>
    </main>
  )
}

export default RootLayout