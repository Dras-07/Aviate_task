import "./app.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from "./components/Pages/Home";
import  About  from "./components/Pages/About";
import  Services  from "./components/Pages/Services";
import  Contact  from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;