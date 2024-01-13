import { useState } from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header/> */}
     <Outlet />
     <Footer />
    </>
  )
}

export default App ;
