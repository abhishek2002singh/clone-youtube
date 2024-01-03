import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu} from '../utils/appSlice'
import { Link } from "react-router-dom";
import {YOUTUBE_SUGGESTIONS_API} from '../utils/constant'
import {cacheResult} from '../utils/searchSlice'

const Nav=()=> {

  const [searchQuary , setsearchQuary] =useState('')
  const [suggestions , setsuggestions]=useState([]);
  const [showSuggestions , setShowSuggestions]=useState(false)
  // console.log(searchQuary)
  const dispatch=useDispatch();


  const searchCache =useSelector(store=>store.search);

  useEffect(()=>{
    const timer = setTimeout(()=>
   {
    if(searchCache[searchQuary]){
      setsuggestions(searchCache[searchQuary])
    }
    else{
      Debouncing()
    }
     
  
  }, 200)

    return ()=>{
      clearTimeout(timer)
    }

  } , [searchQuary])

  // *
  // *key =i,
  // * - render the component
  // * - useEffect();
  // * - start timer => make api call after 200ms
  // * 
  // *key - ip
  // * - destroy the component(useEffect return method)
  // * - re-render the component
  // * - useEffect()
  // * - start timer => make api call after 200ms

  const Debouncing =async()=>{
    const data=await fetch(YOUTUBE_SUGGESTIONS_API+searchQuary)
    const json=await data.json()
    console.log(json[1])
    setsuggestions(json[1])
    dispatch(cacheResult({
      [searchQuary]: json[1],
    }))
  }

 const handleClick =(sug)=>{
 console.log(sug)
//  setsearchQuary(sug)
 setShowSuggestions(false);
 window.location =  setsearchQuary(sug);
 }


  const toggleMenuHeader =()=>{
      dispatch( toggleMenu());
  };
  

  return (
    <div className="m-2">
         <div className="w-full flex justify-between items-center px-5 h-14    sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu 
          
             onClick={()=>toggleMenuHeader()}
             className="cursor-pointer"
          />
        </div>
        <a href="">
        <div className="flex gap-1 items-center justify-center">
         <Link to='/'><BsYoutube className="text-3xl text-red-500" /></Link> 
          <span className="text-2xl ">Youtube<sup>IN</sup></span>
        </div>
        </a>
      </div>
      <div className="w-2/4 flex items-center justify-center gap-5">
        
          <div className="w-full flex  items-center h-10  pr-0 rounded-3xl">
            <div className="w-full flex  items-center ">
              
              <input
              
                type="text"
                placeholder="Search"
                value={searchQuary}

                className="w-full z-50  focus:outline-none border-2   rounded-l-3xl h-11"
               
                onChange={(e)=>setsearchQuary(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                // onBlur={()=>setShowSuggestions(false)}
                
              />
              {showSuggestions && (<div className="fixed w-[40%]  mt-14 shadow-xl z-10">
                <ul className="absolute   w-full border border-black rounded-xl bg-white h-max overflow-y-auto list-none ">
                  {
                    suggestions.map((sug)=>(
                      <li key={sug} className=" hover:bg-black hover:text-white mx-3 my-1 cursor-pointer relative"
                      
                          onClick={()=>handleClick(sug)}

                      > {sug}</li>
                    ))
                  }
                  
                 
                </ul>
              </div>)}
              

            </div>
            <button className="h-11 w-16 flex items-center justify-center bg-gray-300 rounded-r-3xl"

            >
              <AiOutlineSearch className="text-xl " />
            </button>
          </div>
        
        <div className="text-xl p-3 bg-gray-300 rounded-full">
          <FaMicrophone />
        </div>
       
     </div>
     <div className="pr-8">
        <div className=" flex gap-8 items-center text-xl">
        <RiVideoAddLine />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            {" "}
            9+{" "}
          </span>
        </div>
        <Link to='/about'> <img
          src="https://avatars.githubusercontent.com/u/108977081?v=4"
          alt="profile logo"
          className="w-9 h-9 rounded-full"
        /></Link>
       
      </div>
     </div>
     
     </div>
    </div>
    
  );
}

export default Nav