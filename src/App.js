import React, { useState, useEffect } from 'react';
import './App.css'
import db from './firebase'
import Video from './components/Video/Video'

function App() {

  const [videos, setVideos] = useState([])
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  
  return (
    <div className="app">
        tesss
      <div className="app_videos">
        {
          videos.map(({id,url,channel,description,song,likes,messages,shares}) => 
          <Video 

          isActive={isActive}
          setIsActive={setIsActive}
          key={id}
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares} />)
        }
      </div>
    </div>
  );
}

export default App;
