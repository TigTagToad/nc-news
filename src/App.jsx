
import './App.css'
import { Routes, Route } from 'react-router'
import Home from '../src/Pages/Home'
import ArticlePage from './Pages/ArticlePage'
import Header from './Components/Header'



function App() {
 

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/articles/:article_id' element={<ArticlePage />}/>
      <Route path="/:topic" element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
