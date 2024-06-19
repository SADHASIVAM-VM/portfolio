import React from "react";
import './App.css'
import Profile from "./Components/Profile";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <div className="mt-5 md:m-20 my-20 md:mb-10">
      <div className="flex flex-col md:flex-row mx-5 gap-5 relative ">
        <div className="xl:w-[250px] p-5 max-h-[550px] rounded-lg md:rounded-3xl bg-[#1E1E1F] md:sticky md:top-20 border">
          <Profile />
        </div>

        <div className="xl:w-[850px] p-5 rounded-lg md:rounded-3xl bg-[#1E1E1F]  relative border">
          <div className="">
            <Navbar/>
          </div>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
        </div>

      </div>
    </div>
  );
};

export default App;
