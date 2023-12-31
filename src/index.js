import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Body, appLayout} from './Component/Body';
import { RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appLayout}/>
  // <React.StrictMode>
  //   <Body />
  // </React.StrictMode>
);


