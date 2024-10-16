import Image from 'next/image'
import styles from './Hero.module.scss'
import { Neonderthaw } from 'next/font/google'
import { useTranslations } from 'next-intl'
import { IconInsta, IconFb } from '@/components/Icons'
const neonderthaw = Neonderthaw({ weight: '400', subsets: ['latin'] })

const Hero = () => {
  const t = useTranslations('Sections')
  return (
    <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row   w-full flex-wrap items-center bg-black">
      <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1">
        <Image
          src="/Images/LadyStorm.webp"
          alt="Ladystorm in laser dress"
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
        <Image
          src="/Images/LadyStormGoggles.webp"
          alt="Image for change goggles colors"
          resposive="true"
          priority
          width="960"
          height="1080"
          sizes="100vh auto"
          style={{
            objectFit: 'contain',
          }}
          className={`absolute  w-full h-full left-200% object-center-bottom lg:object-left-bottom ${styles.goggles} `}
        />
        <Image
          src="/Images/LadyStormwhip.webp"
          alt="Image for whip change color"
          resposive="true"
          priority
          width="960"
          height="1080"
          sizes="100vh auto"
          style={{
            objectFit: 'contain',
          }}
          className={`absolute  w-full h-full left-300% object-center-bottom lg:object-left-bottom ${styles.whip} `}
        />
        <Image
          src="/Images/LaserBig.webp"
          alt="Laer image over ladystorm"
          fill
          style={{
            objectFit: "contain",
          }}
          priority
          className={`absolute object-center-bottom lg:object-left-bottom ${styles.laserTop} `}
        />
      </div>
      <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1 pt-20  text-white ">
        <Image
          src="/Images/wall.webp"
          alt="title background wall of bricks"
          fill
          sizes="100vw"
          style={{
            objectFit: 'contain',
          }}
          className={` object-center-middle  `}
        />
        <div className="relative flex justify-center items-center">
          <Image
            className="animate-glow scale-90"
            src="/Images/TextSpiral.webp"
            alt="Spiralleft"
            width={80}
            height={148}
            style={{
              objectFit: 'cover',
              objectPosition: "left",
            }}
          />
          <h1 className={`${neonderthaw.className} ${styles.neon} text-white text-6xl lg:text-8xl`} >Lady<span className={styles.blink}>Storm</span></h1>
          <Image
            className=" animate-glow"

            src="/Images/TextSpiral.webp"
            alt="Spiralright"
            width={80}
            height={148}
            style={{
              objectFit: 'cover',
              objectPosition: "left",
              rotate: "180deg"
            }}
          />
        </div>
        <div className='p-8 z-10'   >
          <p>
            {t('hero')}
          </p>
        </div>
      </div>
      <div className="absolute top-0 w-screen h-screen flex  justify-end items-end text-xl">
        <div className=" mr-12 mb-20 flex justify-center gap-4">
          <IconInsta />

        </div>
      </div>
    </div>
  )
}

export default Hero

