import Image from 'next/image'
import styles from './Sing.module.scss'
import { Neonderthaw } from 'next/font/google'
import { useTranslations } from 'next-intl'

const neonderthaw = Neonderthaw({ weight: '400', subsets: ['latin'] })


const Sing = () => {
  const t = useTranslations('Sections')
  return (
    <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row   w-full flex-wrap items-center  bg-white pt-20">
      <div className="relative flex  w-full  lg:w-1/2 lg:h-screen flex-1">
        <Image
          src="/Images/Sing.webp"
          alt="Ladystorm Sining with Buerleska dress"
          priority
          responsive="true"
          width="933"
          height="1185"
          sizes="100vh"
          style={{
            objectFit: "contain"
          }}
          className='object-left-bottom'
        />
      </div>
      <div className="relative flex flex-col justify-center items-center lg:h-full lg:w-1/2  flex-1  text-black ">
        <div className="relative flex justify-center items-center">
          <h1 className={`${neonderthaw.className} ${styles.neon} flex text-gold text-6xl lg:text-8xl`} >
            {t.rich('titles.sing', {
              span: children => <span className={styles.blink}>{children}</span>,
            })}
          </h1>
        </div>
        <div className='p-8 z-10'>
          {t.rich('sing', {
            p: (children) => <p>{children}</p>,
          })}
        </div>
      </div>
    </div>
  )
}

export default Sing
