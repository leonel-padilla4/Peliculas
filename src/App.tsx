import { Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <main className="flex flex-col w-full min-h-screen box-border">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;
