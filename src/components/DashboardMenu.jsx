"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LogOutButton from './LogOutButton';

function DashboardMenu() {

  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between items-center text-sm bg-black text-white py-3 px-5">
      <div className="flex gap-2">
        <Link href="/dashboard" className={"px-2 hover:text-black hover:bg-white " + (pathname === "/dashboard"&& "text-black bg-white")}>Panel de Control</Link>

        <Link href="/actualidad" className='px-2 hover:text-black hover:bg-white ' >Portada</Link>

      </div>
      <div className="flex gap-5">
        <LogOutButton />
      </div>
    </div>
  )
}

export default DashboardMenu