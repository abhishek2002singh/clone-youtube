import React from 'react'
// import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import CommentSection from './CommentSection';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const [SerchParam]=useSearchParams();
  console.log(SerchParam.get("v"))

  // const {resId}=useParams ()
  // console.log(resId)

  return (
    <div>
      <div className='m-8 flex '>
        <div>
          <iframe
       className='rounded-xl'
        width="950"
         height="490" 
         src={"https://www.youtube.com/embed/"+SerchParam.get("v")}
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         alloFullScreen>
        
         </iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
        
      </div>
      <CommentSection />
    </div>
    
  )
}

export default WatchPage