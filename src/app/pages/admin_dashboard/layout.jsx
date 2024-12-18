"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AdminLayout = ({ children }) => {
    const path = usePathname()
    const path1 = "/pages/admin_dashboard"
    const path2 = "/pages/admin_dashboard/users"
    const path3 = "/pages/admin_dashboard/courses"
    
    return (
        <div>
            <div id="menu" className='flex flex-col'>
                <Link href={path1} className={path===path1?"bg-green-700":""}>route1</Link>
                <Link href={path2} className={path===path2?"bg-green-700":""}>route2</Link>
                <Link href={path3} className={path===path3?"bg-green-700":""}>route3</Link>
            </div>
            <div id="items">{children}</div>

        </div>
    )
}

export default AdminLayout