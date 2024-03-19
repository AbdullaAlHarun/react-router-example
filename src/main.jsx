import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componants/Home/Home';
import About from './componants/About/About';
import Contact from './componants/Contact/Contact';
import Users from './componants/Users/Users.jsx';
import Posts from './componants/Posts/Posts.jsx';
import PostDetails from './componants/PostDetails/PostDetails.jsx';
import ErrorPage from './componants/ErrorPage/ErrorPage.jsx';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        element: <Users></Users>
      },
      {
        path: '/posts',
        loader: () => fetch ('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
