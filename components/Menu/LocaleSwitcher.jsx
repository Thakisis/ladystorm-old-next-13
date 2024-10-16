import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Flags } from './Flags'
import styles from './Menu.module.scss'

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher')

    const { locale, locales, route } = useRouter()
    const otherLocale = locales?.filter((cur) => cur !== locale)
    const [dropVisible, setDropVisible] = useState(false)

    const hideMenu = () => {
        setDropVisible(false)
    }
    const switchMenu = () => {
        setDropVisible((visible) => !visible)
    }

    useEffect(() => {
        setDropVisible(false)
    }, [locale])
    return (
        <div className="h-full relative flex justify-center mb-1 items-center gap-2  text-white select-none cursor-pointer" onClick={switchMenu}>

            <span>{locale.toUpperCase()}
                aaa<svg style={{ cursor: "pointer" }} width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </span>

            <div onPointerLeave={hideMenu} className={`bg-red-400  flex-col absolute justify-items-start top-7 items-stretch flagdrop cursor-default ${dropVisible ? styles.visible : styles.hidden}`}  >
                {
                    otherLocale.map((newLocale) => <Link href={route} locale={newLocale} key={newLocale} className="flex items-center m-1 gap-2 p-1 bg-black">
                        <Flags flag={newLocale} />{t(`${newLocale}`)}
                    </Link>)
                }
            </div>
        </div>
    )
}
