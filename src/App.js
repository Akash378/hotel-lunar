import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./App.css";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" overflow-auto h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/contactus" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
