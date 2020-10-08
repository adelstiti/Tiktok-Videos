import React, { useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter/VideoFooter'
import VideoSidebar from './VideoSidebar/VideoSidebar'

const Video = ({url,channel,description,song,shares,likes,messages}) => {

    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

     const onVideoPress = () => {
         if(playing){
            videoRef.current.pause();
            setPlaying(false)
         }else{
            videoRef.current.play();
            setPlaying(true)
         }
    }

    return (
        <div className="video">
            <video className="video_player" loop ref={videoRef} onClick={onVideoPress}
            src={url}></video>
            {/* VideoSideBar*/}
            {/* VideoFooter*/}
            <VideoFooter 
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar shares={shares} likes={likes} messages={messages} />
            </div>
    )
}

export default Video
