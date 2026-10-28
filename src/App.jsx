import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="dark">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
