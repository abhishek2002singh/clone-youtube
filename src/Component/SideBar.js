


import React from 'react'
import{
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
    MdArrowForwardIos,
} from 'react-icons/md';
import { IoIosArrowDown } from "react-icons/io";
import {LuThumbsUp} from 'react-icons/lu';
import { useSelector } from 'react-redux';



const SideBar=()=> {

    const  isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;

    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-xl'/>,
            name: 'Home'
        },
        {
            icon:<MdOutlineSlowMotionVideo className='text-xl'/>,
            name:'Shorts'
        },
        {
            icon:<MdSubscriptions className='text-xl'/>,
            name:'Subscriptions'
        }
    ];

    const otherLinks = [
      
        {
            icon:<MdOutlineVideoLibrary className='text-xl'/>,
            name:'Library'
        },
        {
            icon:<MdHistory className='text-xl'/>,
            name:"History"
        },
        {
            icon:<MdOutlineWatchLater className='text-xl'/>,
            name :"Watch Later"
        },
        {
            icon:<LuThumbsUp className='text-xl'/>,
            name :"Liked Video"
        },
       
    ]

    const handleShowMore =()=>{
      console.log("hii everyone")
    }
    
   

  return (
    <div className='w-2/12  pr-5 overflow-auto pb-8 sidebar'>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {mainLinks.map(
            ({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-zinc-400 ${name === "Home" ?"bg-zinc-300" : " "} rounded-xl`}>
                    <a href='#' className='flex items-center gap-5'> 
                    {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )}
        )}
      </ul>
      <ul className=' flex mt-3 pl-16  py-3 hover:bg-zinc-400 bg-zinc-300 rounded-xl gap-5'>
        <li className='font-bold'>You</li>
        <li ><MdArrowForwardIos  /></li>
       
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-800'>
        {otherLinks.map(
            ({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-zinc-400 `}>
                    <a href='#' className='flex items-center gap-5'> 
                  
                    {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )
            }
        )}
        <ul className=' flex  pl-6 py-3  hover:bg-zinc-400  gap-5'>
        <li><IoIosArrowDown className='text-xl' /></li>
        <li className='text-sm tracking-wider'
        
        onClick={handleShowMore}

        >Show More</li>
    
      </ul>
      </ul>
     



     
    </div>
  )
}

export default SideBar