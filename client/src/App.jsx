import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Post from './Post.jsx'
import Header from './Header.jsx'
import Layout from './Layout.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element ={<Post/>} />
          <Route path = {'/login'} element = {<div>Login page</div>} />
        </Route>
      </Routes>
      
    </>
    
    
  )
}

export default App
