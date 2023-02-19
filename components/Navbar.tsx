import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {GoogleLogin, GoogleLogout} from '@leecheuk/react-google-login'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import Logo from '../utils/tiktik-logo.png'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center border-gray-200 py-2 px-4'>
        <Link href='/'>
            <div className='w-[100px] md:w-[130px] '>
                <Image className='cursor-pointer' 
                src={Logo} 
                alt='TikTIk' 
                layout='responsive'/>
            </div>
        </Link>
    </div>
  )
}

export default Navbar
