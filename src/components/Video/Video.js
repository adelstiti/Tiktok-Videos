import React, { useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter/VideoFooter'
import VideoSidebar from './VideoSidebar/VideoSidebar'

const Video = ({url,channel,description,song,shares,likes,messages}) => {

     const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)
     const onVideoPress = (e) => {

        if(videoRef.current.ended && playing){
           return e.target.play();
         }
         if(playing){
            e.target.pause();
            setPlaying(false)
         }else{
            e.target.play();
            setPlaying(true)
         }
    }


    const onChanges = () => {
        console.log('heey')
    }
    return (
        <div className="video">
            <video className="video_player"  
            onReset={() => console.log("onReset")} 
            
            
            
            ref={videoRef} onClick={onVideoPress} onChange={onChanges}
            src={url}></video>
            {/* VideoFooter*/}
            <VideoFooter 
                channel={channel}
                description={description}
                song={song}
            />
                        {/* VideoSideBar*/}
            <VideoSidebar shares={shares} likes={likes} messages={messages} />
            </div>
    )
}

export default Video
