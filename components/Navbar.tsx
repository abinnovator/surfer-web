import Link from 'next/link'
import React from 'react'
import Button from './ui/button'
import { Download } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='py-3.5 px-14 flex flex-row justify-between items-center font-space text-white bg-[#161616]'>
        <Link href={'/'}><h1>Surfer</h1></Link>
        <nav className='flex flex-row gap-5 py-2.5'>
            <Link href={'/product'}>Product</Link>
            <Link href={'/pricing'}>Pricing</Link>
            <Link href={'https://github.com/Abinnovator/surfer-extension'} target='_blank' rel='noopener noreferrer'>GitHub</Link>
        </nav>
        <div className="flex flex-row gap-2">
          <Link href={'https://surfer.aaditbhambri.com'}>Web</Link>
          <Link href={'https://open-vsx.org/extension/Abinnovator/surfer'}><Button className='bg-[#E98663] cursor-pointer shadow-2xl hover:shadow-none'><Download />Download</Button></Link>
        </div>
        {/* <Link href={'https://open-vsx.org/extension/Abinnovator/surfer'}>Try now</Link> */}
    </div>
  )
}

export default Navbar