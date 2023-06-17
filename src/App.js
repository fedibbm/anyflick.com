import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Navbar from "./components/Navbar/Navbar";
import PopularPage from "./components/PopularPage/PopularPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
