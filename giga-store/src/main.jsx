import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/Root/Root.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import path from 'path'
import Statistics from './components/Statistics/Statistics.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Allproducts from './components/Allproducts/Allproducts.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Phones from './components/Phones/Phones.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:  [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/allproducts',
        element: <Allproducts></Allproducts>,
        loader: ()=> fetch('giga_store.json')
      },
      {
        path: '/laptops',
        element: <Laptops></Laptops>,
        loader: ()=>fetch('giga_store.json')
      },
      {
        path: '/phones',
        element: <Phones></Phones>,
        loader: ()=>fetch('giga_store.json')
      }
    ]
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
