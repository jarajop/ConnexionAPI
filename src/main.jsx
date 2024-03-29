import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "../src/pages/Home.jsx"
import Form1 from "../src/components/Form1.jsx"
import About from './pages/About.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'
import Connexion_Api from './components/Connexion_Api.jsx'
import Private_driver from './components/Private_driver.jsx'
import APIHelpers from '../src/core/APIHelpers.jsx' 
import HomePage from './components/HomePage.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/form1",
          element: <Form1 />
        },
        {
          path: "/form",
          element: <Form />
        },
        {
          path: "/footer",
          element: <Footer />
        },
        {
          path: "/axios",
          element: <Connexion_Api/>
        },
        {
          path: "/axios2",
          element: <Private_driver/>
        },
        {
          path: "/axios3",
          element: <APIHelpers/>
        },
      ]
    }
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
