import React from 'react'
import Nav from './Nav'
import Main from './Main'
import { Provider } from 'react-redux'
import store from '../utils/store'


const Body = () => {
  return (
     <Provider  store={store} >
       <div>
        <Nav />
        <Main />
    </div>
    </Provider>
  
   
  )
}

export default Body