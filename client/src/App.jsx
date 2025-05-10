import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Post from './Post.jsx'
import Header from './Header.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route index element ={
        <main>
          <Header/>
          <Post />
          <Post />
          <Post />
        </main>
        } />
        <Route path = {'/login'} element = {
        <main>
          <Header/>
          <div>Login page</div>
        </main>
        } />
      </Routes>
      
    </>
    
    
  )
}

export default App
