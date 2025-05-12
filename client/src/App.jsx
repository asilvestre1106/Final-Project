import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Layout from './Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import CreatePost from './pages/CreatePost.jsx';
import { UserContextProvider } from './UserContext.jsx';

function App() {
  return (
    <>
    <UserContextProvider>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element ={<HomePage/>} />
          <Route path = "/login" element = {<LoginPage/>} />
          <Route path = "/register" element = {<RegisterPage/>} />
          <Route path = "/create" element = {<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
      
      
    </>
    
    
  )
}

export default App
