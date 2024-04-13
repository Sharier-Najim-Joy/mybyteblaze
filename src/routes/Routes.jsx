import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Bookmarks from "../components/Bookmarks/Bookmarks";
import Content from "../components/Content/Content";
import Author from "../components/Author/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>,
        loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path:'/blogs/:id',
        element:<Blog></Blog>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
            {
                index:true,
                element:<Content></Content>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element:<Author></Author>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            }
        ]
      },
      {
        path:'/bookmarks',
        element:<Bookmarks/>
      },
    ]
  },
]);