import Image from 'next/image'
import styles from './AboutMe.module.scss'
import { Neonderthaw } from 'next/font/google'
import { useTranslations } from 'next-intl'

const neonderthaw = Neonderthaw({ weight: '400', subsets: ['latin'] })

const AboutMe = () => {
  const t = useTranslations('Sections')
  return (
    <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row   w-full flex-wrap items-center bg-black">
      <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1">
        <Image
          src="/Images/AboutMe.webp"
          alt="LadyStorm light dress"
          resposive="true"
          priority
          width="960"
          height="1080"
          sizes="100vh auto"
          style={{
            objectFit: 'contain',
          }}
          className='object-center-bottom lg:object-left-bottom'
        />

      </div>
      <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1  text-white pt-20 ">
        <div className="relative flex justify-center items-center">
          <h1 className={`${neonderthaw.className} ${styles.neon} text-gold text-6xl lg:text-8xl`} >

            {t.rich('titles.team', {
              span: (children) => <span className={styles.blink} >{children}</span>,
            })}

          </h1>
        </div>
        <div className='p-8 z-10'>
          {t.rich('aboutme', {
            p: (children) => <p>{children}</p>,
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutMe


/* =================================================================
<Image
          src="/Images/AboutMe.webp"
          alt="Picture of the author"
          resposive="true"
          priority
          width="960"
          height="1080"
          sizes="100vh auto"
          style={{
            objectFit: 'contain',
          }}
          className={`absolute  w-full h-full left-200% object-center-bottom lg:object-left-bottom  `}
        />
        <Image
          src="/Images/AboutMe.webp"
          alt="Picture of the author"
          resposive="true"
          priority
          width="960"
          height="1080"
          sizes="100vh auto"
          style={{
            objectFit: 'contain',
          }}
          className={`absolute  w-full h-full left-300% object-center-bottom lg:object-left-bottom `}
        />

        */