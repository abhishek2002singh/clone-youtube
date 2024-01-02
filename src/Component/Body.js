import React from 'react'
import Nav from './Nav'
import Main from './Main'
import { Provider } from 'react-redux'
import store from '../utils/store'
import WatchPage from './WatchPage'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import About from './About'


export const Body = () => {
  return (
     <Provider  store={store} >
       <div >
        <Nav />
        
        <Outlet />
    </div>
    </Provider>
  
   
  )
}

export const appLayout=createBrowserRouter([
  {
    path :'/',
    element: <Body />,

    children:[
      {
          path :"/",
          element: <Main />,
      },

      {
        path :"/watch",
        element: <WatchPage />,
    },
    {
      path :"/about",
      element: <About />,
  },
    ],
  },
])