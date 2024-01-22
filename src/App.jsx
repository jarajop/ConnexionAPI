import { useState } from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/HomePage';
import BannerForm from './components/BannerForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage/>
     <Footer />
    </>
  )
}

export default App ;
