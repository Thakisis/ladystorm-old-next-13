
import { useTranslations } from 'next-intl'
import Logo from './Logo'
import LanguageSelector from './LanguageSelector'

const menusList = ["laser", "dance", "burleska", "sing", "about"]
const menu2 = [{ nombre: "Laser Show", ruta: "laser" }]


const NavBar = () => {



  return (
    <nav className={`w-full  absolute top  flex-col flex z-40 pointer-events-none   `} >
      <div className={`w-full text-sm  flex z-40 pointer-events-none p-2 items-center justify-between `}>
        <Logo ></Logo>
        <div className={` items-center flex `} >
          <LanguageSelector></LanguageSelector>
        </div>

      </div>


    </nav>
  )
}

export default NavBar


/* =================================================================
      <div>
        <Logo theme={pathname === '/Sing'}></Logo>
      </div >
      <div className='flex w-full  justify-end  '>
        
            
      
            {
              menus.map((menu) => <Link key={menu} href={`/${menu}`} className={linkRouter} >{t(`${menu}`).toLocaleUpperCase()}</Link>)
            }
        
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>

          <div className="hidden bg-red-900  md:absolute md:top-14  md:flex md:items-center md:w-full lg:visible  flex-col lg:flex-row" id="navbar-default ">
            
      
            {
              menus.map((menu) => <Link key={menu} href={`/${menu}`} className={linkRouter} >{t(`${menu}`).toLocaleUpperCase()}</Link>)
            }
          </div>
      </div>
        <LocaleSwitcher></LocaleSwitcher>
        */