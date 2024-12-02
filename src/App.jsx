import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JavaScript (
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "./App.css"; // Your custom styles

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import Courses from './pages/Courses';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>     
        <Route path='/courses' element={<Courses/>}/>     


       </Routes>
       <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
