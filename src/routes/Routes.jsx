import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
        Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [ 
      {
        index: true,
        path:"/",
        Component: Home,

      },
      {
        path:"/about",
        Component: About,
      },
      {
        path:'/bookDetails/:id',
        loader: async ({ params }) => {
          const res = await fetch('/booksData.json');
          const books = await res.json();
          return books.find((book) => book.bookId === Number(params.id));
        },
        Component: BookDetails
      },
      {
        path:'readList',
        Component: ReadList
      }
    ]

  },
]);
 