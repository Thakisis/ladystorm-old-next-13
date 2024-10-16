
import { isMobile } from 'react-device-detect'
import dynamic from 'next/dynamic'
const CardOffer = dynamic(() => isMobile ? import('./CardOfferMobile') : import('./CardOffer'), {
    loading: () => <p>Loading...</p>, ssr: false
})
const Offers = () => {
    const offers = ["PopRockGirl", "Mystical", "Burleska", "Piano", "Boxing", "Duet", "Matrix"]
    const OfferList = offers.map((value, index) => <CardOffer key={value} image={value} offerId={index + 1} />)
    return (
        <>
            <div className="flex justify-center w-screen pt-10 pb-10 mb-20">
                <div className=" w-full grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 1xl:grid-cols-5 place-items-center">



                    {
                        OfferList
                    }
                </div>
            </div>
        </>
    )
}

export default Offers