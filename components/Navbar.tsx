import Link from 'next/link'
import React from 'react'
import Button from './ui/button'
import { Download } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='py-3.5 px-14 flex flex-row justify-between items-center font-space text-white bg-black'>
        <Link href={'/'}><h1 className='text-white'>Surfer</h1></Link>
        {/* <nav className='flex flex-row gap-5 py-2.5'>
            <Link href={'/product'}>Product</Link>
            <Link href={'/pricing'}>Pricing</Link>
            <Link href={'https://github.com/Abinnovator/surfer-extension'} target='_blank' rel='noopener noreferrer'>GitHub</Link>
        </nav> */}
        <div className="flex flex-row gap-2">
          <Link href={'https://surfer.aaditbhambri.com'}><Button className='bg-black text-white cursor-pointer shadow-2xl hover:shadow-none px-3.5 text-[13px] border-2 border-white'>Web</Button></Link>
          <Link href={'https://open-vsx.org/extension/Abinnovator/surfer'}><Button className='bg-white text-black cursor-pointer shadow-2xl hover:shadow-none px-3.5 text-[13px]'>Download</Button></Link>
        </div>
        {/* <Link href={'https://open-vsx.org/extension/Abinnovator/surfer'}>Try now</Link> */}
    </div>
  )
}

export default Navbar