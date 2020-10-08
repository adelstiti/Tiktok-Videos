import React from 'react'
import './VideoFooter.css'
import Ticker from "react-ticker"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const VideoFooter = ({channel,description,song}) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <FontAwesomeIcon className="videoFooter_icon" icon={faMusic} size=""/>
                    <Ticker mode="smooth">
                        {({index}) => (
                            <>
                                <p>{song}</p>
                            </>
                        )

                        }
                    </Ticker>
                </div>
            </div>
            <img 
            className="videoFooter__record"
            src="https://static.thenounproject.com/png/934821-200.png" alt="record"  />
        </div>
    )
}

export default VideoFooter
