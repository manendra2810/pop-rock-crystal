import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path='pop-rock-crystal' element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
