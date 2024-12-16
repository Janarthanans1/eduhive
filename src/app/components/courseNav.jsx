import React from 'react'
import Link from 'next/link'

const CourseNav = () => {
    return (
        <nav className='bg-blue-900 py-3 text-white'>
            <ul className='flex justify-evenly'>
                <Link href="/pages/courses"><li>Computer Science</li></Link>
                <Link href="/pages/courses/Commerce"><li>Commerce</li></Link>
                <Link href="/pages/courses/HotelManagement"><li>Hotel Management</li></Link>
                <Link href="/pages/courses/Physics"><li>Physics</li></Link>
                <Link href="/pages/courses/Mathematics"><li>Mathematics</li></Link>
                <Link href="/pages/courses/Chemistry"><li>Chemistry</li></Link>
                <Link href="/pages/courses/BioTechnology"><li>BioTechnology</li></Link>
                <Link href="/pages/courses/Microbiology"><li>Microbiology</li></Link>
                <Link href="/pages/courses/English"><li>English</li></Link>
                <Link href="/pages/courses/ForensicScience"><li>Forensic Science</li></Link>
            </ul>

            
        </nav>
    )
}

export default CourseNav