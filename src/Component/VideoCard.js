import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({info}) => {



  return (
    <Link ><div className='w-96 h-96 m-2 p-2 '>
        <img className='w-96 h-52 rounded-xl' src={info.snippet.thumbnails.high.url} alt="" />
        <div className='mt-2'>
          <ul>
            <li className='font-bold'>{info.snippet.title}</li>
            <li className='text-gray-700'>{info.snippet.channelTitle}</li>
            <li>{info.statistics.viewCount/1000}K views</li>
          </ul>
        </div>
        </div>
    </Link>
    
   
    
  )
}

export default VideoCard