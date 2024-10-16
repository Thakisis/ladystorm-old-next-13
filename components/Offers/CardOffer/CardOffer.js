import { useRef, useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import styles from './CardOffer.module.scss'
const CardOffer = ({ image, offerId, setModal }) => {
  const t = useTranslations('offers')
  const [mouse, setMouse] = useState({ width: 0, height: 0, mouseX: 0, mouseY: 0 })
  const [OutHandler, setOutHandler] = useState(null)
  const cardRef = useRef(null)
  const styleCardBG = {
    transform: `translateX(${mouse.PX * -50}px) translateY(${mouse.PY * -50}px)`,
    transition: "1s cubic-bezier(0.23, 1, 0.32, 1)"
  }

  const styleCard = {
    transform: `rotateY(${mouse.PX * 30}deg) rotateX(${mouse.PY * -30}deg)`,
    transition: "1s cubic-bezier(0.23, 1, 0.32, 1)"
  }

  const MouseMove = (e) => {

    const width = cardRef.current.offsetWidth
    const height = cardRef.current.offsetHeight
    const offsetLeft = cardRef.current.offsetLeft
    const offsetTop = cardRef.current.offsetTop
    const PX = (e.pageX - offsetLeft - width / 2) / width
    const PY = (e.pageY - offsetTop - height / 2) / height
    setMouse({ width, height, PX, PY })


  }

  const handleMouseEnter = () => {
    clearTimeout(OutHandler)
  }
  const handleMouseLeave = () => {

    const outTimeOut = setTimeout(() => {
      if (!cardRef.current)
        return
      const width = cardRef.current.offsetWidth
      const height = cardRef.current.offsetHeight
      setMouse({ width, height, PX: 0, PY: 0 })
    }, 1000)
    setOutHandler(outTimeOut)
  }

  return (
    <div className='flex flex-col justify-center w-full items-center pt-10'>
      <Link className={styles.neonButton} href={'/contact'}>Hire Service</Link>
      <div className={styles.cardWrap}
        ref={cardRef}>

        <div className={styles.card} style={styleCard}
          onMouseMove={MouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

          <div className={styles.cardBg} style={styleCardBG}>
            <Image src={`/Images/Offers/${image}bg.webp`} width="520" height="774" alt="offer 1" className={styles.offerbg} ></Image>
          </div>
          <div >

            <Image src={`/Images/Offers/${image}fg.webp`} width="520" height="774" alt="offer 1" className={styles.offerfg}></Image>
          </div>
          <div className={`${styles.cardInfo}  `}>
            <h1 >{t(`offerTitle${offerId}`)}</h1>
            <div >{t(`offertext${offerId}`)}</div>
          </div>
          <div
            className={styles.cardBorder}
          ></div>

        </div>
      </div>

    </div>
  )
}

export default CardOffer;

/*



ref={styles.card">
        <div 
        
        style={{backgroundImage:`url(${image})`,backgroundSize:'cover'}}
        ref={cardRef}>
        <h1 slot="header">{text}</h1>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      */
