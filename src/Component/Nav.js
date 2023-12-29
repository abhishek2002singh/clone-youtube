import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleMenu} from '../utils/appSlice'

const Nav=()=> {

  const dispatch=useDispatch();

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
          <BsYoutube className="text-3xl text-red-500" />
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
                className="w-full  focus:outline-none border-2   rounded-l-3xl h-11"
                // value={searchTerm}
                // onChange={e=>dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            <button className="h-11 w-16 flex items-center justify-center bg-gray-300 rounded-r-3xl">
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
        <img
          src="https://avatars.githubusercontent.com/u/108977081?v=4"
          alt="profile logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
     </div>
     
     </div>
    </div>
    
  );
}

export default Nav