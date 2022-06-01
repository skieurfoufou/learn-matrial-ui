import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import SearchAppBar from "./components/AppBar";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Tour" exact element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
