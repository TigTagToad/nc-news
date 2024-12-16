import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from '../src/Pages/Home'
import ArticlePage from './Pages/ArticlePage'


function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/articles/:article_id' element={<ArticlePage />}/>
    </Routes>
    </>
  )
}

export default App
