import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Component/root/Root';
import Errorpage from './Component/ErrorPage/Errorpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/home/Home';
import Dasboard from './Component/dasboard/Dasboard';
import BookDetails from './Component/bookDetails/BookDetails';
import ListedBooks from './Component/listedBooks/ListedBooks';
 import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,

    children: [
      {
        path: '/', 
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
        
      },
      {
        path: 'dasboard', 
        element: <Dasboard></Dasboard>
      },
      {
        path: 'listedBooks', 
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')
      },
      
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
)
