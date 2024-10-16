
import { IconInsta, IconFb, IconMail } from '@/components/Icons'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="absolute bottom-0 left-0 z-20 w-full bg-white border-t border-gray-200 shadow flex md:flex md:items-center justify-between  px-8 py-4 dark:bg-gray-800 dark:border-gray-600 ">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-100 flex justify-center items-center">
                LadyStorm.cz
            </span>
            <ul className="flex flex-wrap justify-center items-center  text-sm font-medium text-gray-500 dark:text-gray-100 sm:mt-0">

                <li className='mx-2 '><IconInsta className="w-1" /></li>
                <li className='mx-2'><IconMail className="w-1" /></li>

            </ul>
        </footer>

    )
}

export default Footer