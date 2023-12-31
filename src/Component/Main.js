import SideBar from "./SideBar"
import MainContainer from './MainContainer'
import { Outlet } from "react-router-dom"

const Main =()=>{
    return(
        <div className="flex absolute" >
            <div  className='flex'>
                <SideBar />
            </div>
             
             <MainContainer />
             
        </div>
    )
}

export default Main