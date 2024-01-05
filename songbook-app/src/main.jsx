import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import SongPage from './pages/SongPage.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/:id",
    element: <SongPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
