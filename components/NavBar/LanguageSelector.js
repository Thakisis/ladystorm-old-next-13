import {useState} from 'react'
import Link  from 'next/link'
import { Flags } from './Flags'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

const DropDown = () => {
    const t = useTranslations('LocaleSwitcher')
    const { locale, locales, route } = useRouter()
    const otherLocales = locales?.filter((cur) => cur !== locale)
    const [dropVisible, setDropVisible] = useState(false)
    const subMenu=otherLocales.map((newLocale)=><Link href={route} locale={newLocale} key={newLocale} className="flex items-center mx-2 gap-2 p-2 hover:bg-white hover:bg-opacity-20"><Flags flag={newLocale} />{t(`${newLocale}`)}</Link>)
    return (
        <div className="relative inline-block text-left pointer-events-auto" onClick={()=>setDropVisible((value)=>!value)}  >
            <div>
                <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  mr-2  hover:bg-white hover:bg-opacity-20" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    {locale.toUpperCase()}
                    <svg className="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div onMouseLeave={()=>setDropVisible(false)} className={`${dropVisible?"flex":"hidden"} absolute right-0 z-10 mt-2 w-26 origin-top-right rounded-md shadow-lg   focus:outline-none" role="menu" ariaOrientation="vertical`}>
                <div className="py-1 text-white" role="none">
                    {subMenu}

                </div>
            </div>
            <div className="bg-green-600">

            </div>
        </div >
    )
}

export default DropDown