import ReactJkMusicPlayer from 'react-jinke-music-player'
import { audioList1 } from './Audiolist'


const AudioPlayer = () => {


    const options = {
        audioLists: audioList1,
        clearPriorAudioLists: true,
        defaultPosition: { left: 20, bottom: 50 },
        volumeFade: { fadeIn: 500, fadeOut: 500 },
        autoHiddenCover: true,
        mode: "mini",
        glassBg: true,
        autoPlay: false,
        drag: false,
        remove: false,
        showDownload: false
    }

    return (

        <ReactJkMusicPlayer {...options} />


    )
}

export default AudioPlayer