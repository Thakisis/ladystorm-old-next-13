import { useRef,useEffect } from 'react';
import styles from './Videofull.module.scss'
const VideoFull = ({setVideo,videoFile, style}) => {
/*
    const videoRef=useRef(null)
    useEffect(()=>{
        if(setVideo)
        {
            setVideo(videoRef)
        }
    },[videoRef,setVideo])
*/

    return (
        
            <video  className="object-cover h-full  w-screen z-0 absolute" autoPlay playsInline  loop muted width="1920px" height="1080px" style={style} >
                <source src={`/videos/${videoFile}.avif`} type="video/avif" />
                <source src={`/videos/${videoFile}.m4v`} type="video/mp4" />
            </video>            
        
    );
};

export default VideoFull;

/*

*/