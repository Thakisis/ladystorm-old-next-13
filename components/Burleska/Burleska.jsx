import Image from 'next/image'
import styles from './Burleska.module.scss'
import { Neonderthaw } from 'next/font/google'
import { useTranslations } from 'next-intl'

const neonderthaw = Neonderthaw({ weight: '400', subsets: ['latin'] })
const Burleska = () => {


  const t = useTranslations('Sections')

  return (
    <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row-reverse  w-full flex-wrap items-center bg-black">
      <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1">
        <Image
          src="/Images/Burleska.webp"
          alt="Ladystorm Burleska"
          resposive="true"
          priority
          width="1156"
          height="1080"
          sizes="100vh auto"
          style={{
            objectFit: 'contain',
          }}
          className='object-right-bottom '
        />
      </div>
      <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1  text-white pt-20 ">
        <h1 className={`${neonderthaw.className} ${styles.neon} text-gold text-6xl lg:text-8xl`} >
          {t.rich('titles.burleska', {
            span: (children) => <span className={styles.blink} >{children}</span>,
          })}

        </h1>
        <div className='p-8 z-10'>
          {t.rich('burleska', {
            p: (children) => <p>{children}</p>,
          })}
        </div>
      </div>
    </div>
  )
}

export default Burleska


