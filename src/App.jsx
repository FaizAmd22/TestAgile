// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './App.css'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from "./pages/Search";
import MainLayout from "./layout/mainLayout";
import NotFound from "./pages/NotFound";

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<MainLayout />>
            <Route
              path="/"
              element=<Home />
            />
            <Route
              path="/search"
              element=<Search />
            />
            <Route
              path="/detail"
              element=<Detail />
            />
          </Route>

          <Route path="*" element=<NotFound /> />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
