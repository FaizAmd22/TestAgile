import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from "./pages/Search";
import MainLayout from "./layout/mainLayout";
import NotFound from "./pages/NotFound";

function App() {
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
