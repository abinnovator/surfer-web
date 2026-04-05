import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='py-8 px-14 flex flex-row justify-between items-center font-space text-white'>
        <Link href={'/'}><h1>Surfer</h1></Link>
        <nav className='flex flex-row gap-3.5'>
            <Link href={'/product'}>Product</Link>
            <Link href={'/pricing'}>Pricing</Link>
            {/* Added GitHub button */}
            <Link href={'https://github.com/Abinnovator/surfer-extension'} target='_blank' rel='noopener noreferrer'>GitHub</Link>
        </nav>
        <Link href={'https://open-vsx.org/extension/Abinnovator/pointer'}>Try now</Link>
    </div>
  )
}

export default Navbar