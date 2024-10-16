import { useRef,useState,useEffect } from 'react';
import { useTranslations } from 'next-intl'
import Image from 'next/image';

import styles from './CardOffer.module.scss'
const CardOffer = ({image,offerId }) => {
    const t = useTranslations('offers')
    const [mouse,setMouse]=useState({width:0,height:0,mouseX:0,mouseY:0})
    const [OutHandler,setOutHandler]=useState(null)
    const cardRef=useRef(null)

    const [orientation, setOrientation] = useState({
        dBeta: 0,
        dGamma: 0,
        beta: 0,
        gamma: 0,
        isReset: false
    })


    const styleCardBG={

//        transform: `translateX(${mouse.PX * -50}deg) translateY(${mouse.PY * -50}px)`,
      transform: `rotateY(${orientation.gamma/5 }deg) rotateX(${-orientation.beta/5 }deg)`,
      transition:"1s cubic-bezier(0.23, 1, 0.32, 1)"
//        transition:"1s cubic-bezier(0.23, 1, 0.32, 1)"
    }
    
    const styleCard2={

        transform: `rotateY(${mouse.PX * 30}deg) rotateX(${mouse.PY * -30}deg)`,
      //transition:"1s cubic-bezier(0.23, 1, 0.32, 1)"
        

    }
    const styleCard={

        //transform: `rotateY(${orientation.gamma*1.5 }deg) rotateX(${orientation.gamma*0}deg)`,
      transition:"1s cubic-bezier(0.23, 1, 0.32, 1)"
        

    }

    useEffect(() => {

        const rotateDeviceHandler = (event) => {
            if (orientation.isReset !== true) {
                setOrientation({
                    dBeta: event.beta || 0,
                    dGamma: event.gamma || 0,
                    beta: 100,
                    gamma: 0,
                    isReset: true
                })
                
                return
            }
            setOrientation((oldOri) => ({
                ...oldOri,
                beta: oldOri.dBeta - event.beta,
                gamma: oldOri.dGamma - event.gamma

            }))


        }
        window.addEventListener("deviceorientation", rotateDeviceHandler)
        return () => {
            window.removeEventListener("deviceorientation", rotateDeviceHandler)
        }
    }, [orientation.isReset])




    return (
      <div className='flex flex-col justify-center w-full items-center pt-10'>
          
          <div className="lg:hidden sm:block p-4">
              <h1 >{t(`offerTitle${offerId}`)}</h1>
              <div >{t(`offertext${offerId}`)}</div>
          </div>
        
        <div className={styles.cardWrap}
        ref={cardRef}>
        <div className={styles.card} style={styleCard}
            
        >
          <div className={styles.cardBg} style={styleCardBG}>
            
            <Image src={`/Images/Offers/${image}bg.webp`} width="520" height="774" alt="offer 1" className={styles.offerbg} ></Image>
          </div>
          <div >
            
            <Image src={`/Images/Offers/${image}fg.webp`} width="520" height="774" alt="offer 1" className={styles.offerfg}></Image>
          </div>
          
          
          
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
