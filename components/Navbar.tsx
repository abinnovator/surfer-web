import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='py-8 px-14 flex flex-row justify-between items-center font-space text-white'>
        <h1>Surfer</h1>
        <nav className='flex flex-row gap-3.5'>
            <Link href={'/product'}>Product</Link>
            <Link href={'/pricing'}>Pricing</Link>
        </nav>
        <Link href={'/pricing'}>Try now</Link>

    </div>
  )
}

export default Navbar