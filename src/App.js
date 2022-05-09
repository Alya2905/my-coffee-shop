import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import './App.css';

function App() {
  return <Router>
  <nav>
    <Link to="/about" className="link">MADEO - хиты продаж!</Link>
    <Link to="/home" className="link">Кофейные сладости</Link>
    <Link to="/shop" className="link">Cвежеобжаренный кофе</Link>  
    <Link to="/contact" className="link">Наши контакты</Link>
    </nav>

<Routes>
  <Route path="about" element={<About/>} />
  <Route path="home" element={<Home/>} />
  <Route path="shop" element={<Shop/>} />
  <Route path="contact" element={<Contact/>} />
</Routes>
</Router>
}

export default App;