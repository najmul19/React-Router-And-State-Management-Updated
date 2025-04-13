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
import Accesories from './components/Accesories/Accesories.jsx'
import SmartWatches from './components/SmartWatches/SmartWatches.jsx'
import MackBook from './components/MackBook/MackBook.jsx'
import Iphones from './components/Iphones/Iphones.jsx'
import DetailsPage from './components/DetailsPage/DetailsPage.jsx'
import Carts from './components/Carts/Carts.jsx'
import WishLiast from './components/WishLiast/WishLiast.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:  [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('/giga_store.json')

      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: ()=> fetch('/giga_store.json')
      },
      {
        path: '/allproducts',
        element: <Allproducts></Allproducts>,
        loader: ()=> fetch('/giga_store.json')
      },
      {
        path: '/laptops',
        element: <Laptops></Laptops>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: '/phones',
        element: <Phones></Phones>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: '/accessories',
        element: <Accesories></Accesories>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: '/smartwatch',
        element: <SmartWatches></SmartWatches>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: '/macbook',
        element: <MackBook></MackBook>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: '/iphone',
        element: <Iphones></Iphones>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: 'detailspage/:product_id',
        element: <DetailsPage></DetailsPage>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: 'dashboard/cart',
        element: <Carts></Carts>,
        loader: ()=>fetch('/giga_store.json')
      },
      {
        path: 'dashboard/wishLisht',
        element: <WishLiast></WishLiast>,
        loader: ()=>fetch('/giga_store.json')
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
