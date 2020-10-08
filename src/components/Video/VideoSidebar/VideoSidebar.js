import React, { useState } from 'react'
import './VideoSidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare,faCommentDots,faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'


const VideoSidebar = ({likes,shares,messages}) => {
    
    const [liked, setLiked] = useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebare__action" onClick={() => setLiked(!liked)}>
                {liked ? <FontAwesomeIcon icon={faHeart} size="2x" /> 
                : <FontAwesomeIcon icon={faHeartReg} size="2x" />}
                <p>{liked ? likes+1 : likes}</p>
            </div>
            <div className="videoSidebare__action">
            <FontAwesomeIcon icon={faCommentDots} size="2x" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebare__action">
                <FontAwesomeIcon icon={faShare} size="2x" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
