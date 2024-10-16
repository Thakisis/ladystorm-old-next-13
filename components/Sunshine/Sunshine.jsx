import Image from 'next/image'
import styles from './Sunshine.module.scss'
import { Neonderthaw } from 'next/font/google'
import { useTranslations } from 'next-intl'

const neonderthaw = Neonderthaw({ weight: '400', subsets: ['latin'] })


const Burleska = () => {

  const style3d = {
    display: 'block',
    width: "752px",
    height: "752px",
    position: "absolute",
    top: 0,
    right: 0,



  }
  const styletransfomr = {



  }

  const t = useTranslations('Sections')

  return (
    <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row-reverse  w-full flex-wrap items-center overflow-hidden bg-black">
      <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1 ">
        <div className=" absolute w-full h-full flex">
          <Image
            src="/Images/TurnTableSunshine.webp"
            alt="Turn table Sunshine Band"

            priority
            width="960"
            height="1080"
            sizes="20vh auto"
            style={{
              objectFit: "contain",
              opacity: 1,
              zIndex: 10,
              mixBlendMode: "lighten"
            }}
            className='object-contain object-right-bottom'
          />
        </div>
        <div style={{ ...style3d }}>
          <Image
            src="/Images/disc1.webp"
            alt="Turn table Sunshine Band overlay"

            priority
            width="752"
            height="752"
            sizes="auto auto"
            style={{
              transform: "translateX(30%) translateY(-30%)",
              transformOrigin: "80% 20%"


            }}
            className={`object-contain object-center-middle ${styles.discImage}`}
          />
        </div>
        <Image
          src="/Images/TurnTableSunshine.webp"
          alt="Sunshine vinyl"

          priority
          width="960"
          height="1080"
          sizes="20vh auto"

          style={{




          }}
          className=' object-contain object-right-bottom'
        />



      </div>
      <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1  text-white pt-20 ">
        <div className="relative flex justify-center items-center">
          <h1 className={`${neonderthaw.className} ${styles.neon} text-gold text-6xl lg:text-8xl`} >
            {t.rich('titles.sunshine', {
              span: children => <span className={styles.blink}>{children}</span>,
            })}

          </h1>
        </div>
        <div className='p-8 z-10'>
          {t.rich('sunshine', {
            p: (children) => <p>{children}</p>,
          })}
        </div>
      </div>
    </div>
  )
}

export default Burleska


