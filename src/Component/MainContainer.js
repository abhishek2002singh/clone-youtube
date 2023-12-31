import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div >
      <div className='overflow-hidden'>
        <ButtonList />
      </div>
        
        <VideoContainer />
    </div>
  )
}

export default MainContainer