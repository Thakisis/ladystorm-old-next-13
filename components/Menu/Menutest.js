
import { useTranslations } from 'next-intl'
import styles from './Menu.module.scss'
import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitcher'
import Logo from './Logo'
import { useRouter } from 'next/router'
const menus=["laser","dance","burleska","sing","about"]
const Menu = () => {

 
  const t = useTranslations('menu')
  const { pathname, locale } = useRouter()

  const linkRouter = pathname === '/Sing' ?
    "mr-3  hover:text-pink-400 hover:translate-y-1rem duration-500 pointer-events-auto transition-colors"
    :
    "mr-3  hover:text-pink-400 hover:translate-y-1rem duration-500 pointer-events-auto transition-colors"

  return (
    
<nav className="fixed top-0 left0 w-screen bg-red-300">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-red-500">
      <Logo></Logo>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 rounded  md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4  md:p-0 ">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4  md:p-0 ">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4  md:p-0 ">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4  md:p-0 ">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Menu