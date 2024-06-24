// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Player from './components/Player.jsx'
import Sidebar from './components/Sidebar.jsx'
import Display from './components/Display.jsx'
import { PlayerContext } from './context/PlayerContext.jsx'
const App = () => {

  const {audioRef,track} = useContext(PlayerContext);
  
  return(
  <div className='h-screen bg-black'>
    <div className='h-[90%] flex'>
      <Sidebar/>
      <Display/>
    </div>

    <Player/>
    <audio ref={audioRef} src={track.file} preload='auto'></audio>

  </div>
)
}

export default App
