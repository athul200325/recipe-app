import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'

const App = () => {
  return (
    <>
    
        <Routes>
      <Route path='/' element={<Home/>}></Route>

      <Route path='/:id/view' element={<View/>}></Route>

    </Routes>

    <Footer/>
    </>
  )
}

export default App