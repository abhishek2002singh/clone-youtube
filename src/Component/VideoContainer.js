import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard, { AddVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';



const VideoContainer = () => {

  const [video , setvideo]=useState([])
  

  

  useEffect(()=>{
    // const queryParams = new URLSearchParams(window.location.search);
    // const query = queryParams.get('query');

  
       youtubeApi();
    
      
  }, []);


  // const youtubeSearchApi = async (query) => {
  //   const data = await fetch(`${YOUTUBE_API}&q=${query}`);
  //   const json = await data.json();
  //   setvideo(json.items);
  // };

  const youtubeApi =async()=>{
    const data=await fetch(YOUTUBE_API)
    const json= await data.json()
    console.log(json.items)
    setvideo(json.items)
  }

 

  return (
    
       <div className='flex flex-wrap'>
        {video[0]&& <AddVideoCard info={video[0]}/>}
      {
        
           video.map((items)=>(
            
             <Link to={"/watch?v=" + items.id}>
                 <VideoCard  key={items.id} info={items}/>
              </Link> 
            
          
        ))}
        
    </div>
   
   
  )
}

export default VideoContainer