
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import Sidebar from "./pages/Sidebar/Sidebar.jsx"
import Home from "./pages/Home/Home";

import UserContext from "./contexts/UserContext";

import "./App.sass"

function App() {
  const [userToken, setUserToken] = useState({ token: "" })

  return (
    <div className="App">
      <UserContext.Provider value={{ userToken, setUserToken }}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App
