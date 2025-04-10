import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./componets/Root/Root";
import ErrorPage from "./componets/ErrorPage/ErrorPage";
import Home from "./componets/Home/Home";
import DashBoard from "./componets/DashBoard/DashBoard";
import BookDetail from "./componets/BookDetail/BookDetail";
import ListedBooks from "./componets/ListedBooks/ListedBooks";
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json')
      }
      ,
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>

      <RouterProvider router={router} />
      <ToastContainer />

  </StrictMode>
);
