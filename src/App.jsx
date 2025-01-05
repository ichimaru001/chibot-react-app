import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { Chat, Home, SignIn, LogIn, Avatar } from './assets/Pages'
import { Home, Avatar, Chat, LogIn, SignIn, NoPage } from './assets/Pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/avatar' element={<Avatar />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
          <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
