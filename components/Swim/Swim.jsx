import Image from 'next/image'
import styles from './Swim.module.scss'
import { Neonderthaw } from 'next/font/google'
import { useTranslations } from 'next-intl'
import VideoFull from '@/components/Videofull'

const neonderthaw = Neonderthaw({ weight: '400', subsets: ['latin'] })
const Sing = () => {
  const t = useTranslations('Sections')
  return (
    <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row   w-full flex-wrap items-center  bg-black ">
      <VideoFull
        videoFile="Underwater"
        style={{ position: "absolute", scale: "1 1 ", objectPosition: "right" }}
      ></VideoFull>
      <div className="relative flex  w-full  lg:w-1/2 lg:h-screen flex-1 ">
        <Image

          src="/Images/Swim.webp"
          alt="Picture of the author"
          priority
          responsive="true"
          width="1185"
          height="933"
          sizes="auto 100vw"
          style={{
            objectFit: "contain",
            mixBlendMode: "overlay",
          }}
          className='object-left-bottom'
        />
        <Image
          src="/Images/Swim.webp"
          alt="Picture of the author"
          priority
          responsive="true"
          width="1185"
          height="933"
          sizes="100vw auto"
          style={{
            objectFit: "contain",
            opacity: 1,
            zIndex: 100,
            mixBlendMode: "overlay"
          }}
          className={`absolute  w-full h-full left-200% object-left-bottom `}
        />
        <Image
          src="/Images/Swim.webp"
          alt="Picture of the author"
          priority
          responsive="true"
          width="1185"
          height="933"
          sizes="100vw auto"
          style={{
            objectFit: "contain",
            opacity: .4,
            zIndex: 100,
          }}
          className={`absolute  w-full h-full left-200% object-left-bottom `}
        />
      </div>
      <div className="relative flex flex-col justify-center items-center lg:h-full lg:w-1/2  flex-1  text-white pt-20">
        <div className="relative flex justify-center items-center">
          <h1 className={`${neonderthaw.className} ${styles.neon} text-gold text-6xl lg:text-8xl`} >
            {t.rich('titles.swim', {
              span: (children) => <span className={styles.blink} >{children}</span>,
            })}

          </h1>
        </div>
        <div className='p-8 z-10'>
          {t.rich('swim', {
            p: (children) => <p>{children}</p>,
          })}
        </div>
      </div>
    </div>
  )
}

export default Sing
