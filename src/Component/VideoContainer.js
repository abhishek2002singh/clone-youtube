import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { useParams } from 'react-router-dom';


const VideoContainer = () => {

  const [video , setvideo]=useState([])

  

  useEffect(()=>{
       youtubeApi();
  }, []);

  const youtubeApi =async()=>{
    const data=await fetch(YOUTUBE_API)
    const json= await data.json()
    console.log(json.items)
    setvideo(json.items)
  }

  return (
    
       <div className='flex flex-wrap'>

      {
        
           video.map((items)=>(
            
              <VideoCard info={items}/>
            
          
        ))
        
       
      }
        
    </div>
   
   
  )
}

export default VideoContainer