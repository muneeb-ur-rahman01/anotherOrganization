import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Home from "./Pages/Home";
import Updates from "./Components/Updates/Updates";
import QuickDonate from "./Components/Donate/Donate";
function App() {
  return (
   <HashRouter>
     <Routes>


      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Updates" element={<Updates />} />
      <Route path="/QuickDonate" element={<QuickDonate/>}/>

    </Routes>
   </HashRouter>
  );
}

export default App;